import { useState } from 'react';
import { Plus, Edit, Trash2, ExternalLink, Calendar, Award } from 'lucide-react';
import { Button } from '@moksit-org/ui';
import { Card, CardContent, CardHeader, CardTitle } from '@moksit-org/ui';
import { Badge } from '@moksit-org/ui';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@moksit-org/ui';
import { Input } from '@moksit-org/ui';
import { Label } from '@moksit-org/ui';
import { Textarea } from '@moksit-org/ui';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@moksit-org/ui';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  credentialUrl?: string;
  issueDate: string;
  expiryDate?: string;
  status: 'active' | 'expired' | 'pending';
  category: string;
}

const mockCertifications: Certification[] = [
  {
    id: '1',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    description: 'Demonstrates expertise in designing distributed systems on AWS.',
    credentialUrl: 'https://aws.amazon.com/verification/ABC123',
    issueDate: '2023-06-15',
    expiryDate: '2026-06-15',
    status: 'active',
    category: 'Cloud Computing',
  },
  {
    id: '2',
    title: 'React Developer Certification',
    issuer: 'Meta',
    description: 'Certification demonstrating proficiency in React development and best practices.',
    credentialUrl: 'https://developers.facebook.com/certification/XYZ789',
    issueDate: '2023-09-20',
    status: 'active',
    category: 'Frontend Development',
  },
  {
    id: '3',
    title: 'Google Analytics Certified',
    issuer: 'Google',
    description: 'Demonstrates proficiency in Google Analytics and digital marketing insights.',
    credentialUrl: 'https://skillshop.exceedlms.com/student/path/12345',
    issueDate: '2023-03-10',
    expiryDate: '2024-03-10',
    status: 'expired',
    category: 'Analytics',
  },
  {
    id: '4',
    title: 'Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    description: 'Certification for Kubernetes administrators managing production clusters.',
    issueDate: '2024-01-15',
    expiryDate: '2025-08-15',
    status: 'active',
    category: 'DevOps',
  },
];

export function CertificationsManager() {
  const [certifications, setCertifications] = useState<Certification[]>(mockCertifications);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCertification, setEditingCertification] = useState<Certification | null>(null);

  const handleAddCertification = () => {
    setEditingCertification(null);
    setIsDialogOpen(true);
  };

  const handleEditCertification = (certification: Certification) => {
    setEditingCertification(certification);
    setIsDialogOpen(true);
  };

  const handleDeleteCertification = (certificationId: string) => {
    setCertifications(certifications.filter(c => c.id !== certificationId));
  };

  const getStatusColor = (status: Certification['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const isExpiring = (cert: Certification) => {
    if (!cert.expiryDate) return false;
    const expiryDate = new Date(cert.expiryDate);
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
    return expiryDate <= thirtyDaysFromNow && cert.status === 'active';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1>Certifications</h1>
          <p className="text-muted-foreground">
            Manage your professional certifications and credentials
          </p>
        </div>
        <Button onClick={handleAddCertification}>
          <Plus className="mr-2 h-4 w-4" />
          Add Certification
        </Button>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <Card key={cert.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="space-y-1">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <CardTitle className="text-lg flex items-center">
                    <Award className="mr-2 h-5 w-5 text-primary" />
                    {cert.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <Badge className={getStatusColor(cert.status)}>
                    {cert.status}
                  </Badge>
                  {isExpiring(cert) && (
                    <Badge variant="outline" className="text-xs">
                      Expiring Soon
                    </Badge>
                  )}
                </div>
              </div>
              <Badge variant="secondary">{cert.category}</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {cert.description}
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-2 h-3 w-3" />
                  Issued: {new Date(cert.issueDate).toLocaleDateString()}
                </div>
                {cert.expiryDate && (
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-2 h-3 w-3" />
                    Expires: {new Date(cert.expiryDate).toLocaleDateString()}
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center pt-2">
                {cert.credentialUrl && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Verify
                    </a>
                  </Button>
                )}
                
                <div className="flex space-x-1">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEditCertification(cert)}
                  >
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDeleteCertification(cert.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              {editingCertification ? 'Edit Certification' : 'Add New Certification'}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Certification Title</Label>
              <Input
                id="title"
                defaultValue={editingCertification?.title}
                placeholder="e.g., AWS Certified Solutions Architect"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="issuer">Issuing Organization</Label>
              <Input
                id="issuer"
                defaultValue={editingCertification?.issuer}
                placeholder="e.g., Amazon Web Services"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                defaultValue={editingCertification?.description}
                placeholder="Describe what this certification demonstrates"
                rows={3}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select defaultValue={editingCertification?.category || 'General'}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Cloud Computing">Cloud Computing</SelectItem>
                  <SelectItem value="Frontend Development">Frontend Development</SelectItem>
                  <SelectItem value="Backend Development">Backend Development</SelectItem>
                  <SelectItem value="DevOps">DevOps</SelectItem>
                  <SelectItem value="Analytics">Analytics</SelectItem>
                  <SelectItem value="Security">Security</SelectItem>
                  <SelectItem value="General">General</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="issueDate">Issue Date</Label>
                <Input
                  id="issueDate"
                  type="date"
                  defaultValue={editingCertification?.issueDate}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="expiryDate">Expiry Date (Optional)</Label>
                <Input
                  id="expiryDate"
                  type="date"
                  defaultValue={editingCertification?.expiryDate}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="credentialUrl">Credential URL (Optional)</Label>
              <Input
                id="credentialUrl"
                defaultValue={editingCertification?.credentialUrl}
                placeholder="https://verify.example.com/credential"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsDialogOpen(false)}>
                {editingCertification ? 'Update' : 'Create'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}