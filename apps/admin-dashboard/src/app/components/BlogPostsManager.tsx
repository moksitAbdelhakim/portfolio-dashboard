import { useState } from 'react';
import { Plus, Edit, Trash2, Eye, Calendar, Clock } from 'lucide-react';
import { Button } from '@moksit-org/ui';
import { Card, CardContent, CardHeader, CardTitle, CardAction } from '@moksit-org/ui';
import { Badge } from '@moksit-org/ui';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@moksit-org/ui';
import { Input } from '@moksit-org/ui';
import { Label } from '@moksit-org/ui';
import { Textarea } from '@moksit-org/ui';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@moksit-org/ui';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  status: 'draft' | 'published' | 'archived';
  category: string;
  readTime: number;
  publishedAt?: string;
  createdAt: string;
}

const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React Server Components',
    excerpt: 'Learn how to use React Server Components to build faster, more efficient web applications.',
    content: 'React Server Components represent a paradigm shift...',
    status: 'published',
    category: 'React',
    readTime: 5,
    publishedAt: '2024-01-20',
    createdAt: '2024-01-18',
  },
  {
    id: '2',
    title: 'Building Scalable APIs with Node.js',
    excerpt: 'Best practices for designing and implementing scalable REST APIs using Node.js and Express.',
    content: 'When building APIs that need to handle...',
    status: 'published',
    category: 'Backend',
    readTime: 8,
    publishedAt: '2024-02-15',
    createdAt: '2024-02-10',
  },
  {
    id: '3',
    title: 'The Future of CSS: Container Queries',
    excerpt: 'Explore how container queries are revolutionizing responsive design in modern web development.',
    content: 'Container queries have finally arrived...',
    status: 'draft',
    category: 'CSS',
    readTime: 6,
    createdAt: '2024-03-01',
  },
];

export function BlogPostsManager() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(mockBlogPosts);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const handleAddPost = () => {
    setEditingPost(null);
    setIsDialogOpen(true);
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setIsDialogOpen(true);
  };

  const handleDeletePost = (postId: string) => {
    setBlogPosts(blogPosts.filter(p => p.id !== postId));
  };

  const getStatusColor = (status: BlogPost['status']) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1>Blog Posts</h1>
          <p className="text-muted-foreground">
            Manage your blog content and publications
          </p>
        </div>
        <Button onClick={handleAddPost}>
          <Plus className="mr-2 h-4 w-4" />
          New Post
        </Button>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {post.publishedAt ? 
                        new Date(post.publishedAt).toLocaleDateString() :
                        new Date(post.createdAt).toLocaleDateString()
                      }
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {post.readTime} min read
                    </div>
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                <Badge className={getStatusColor(post.status)}>
                  {post.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-end space-x-2">
                  <Button size="sm" variant="outline">
                    <Eye className="mr-2 h-3 w-3" />
                    Preview
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEditPost(post)}
                  >
                    <Edit className="mr-2 h-3 w-3" />
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDeletePost(post.id)}
                  >
                    <Trash2 className="mr-2 h-3 w-3" />
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {editingPost ? 'Edit Blog Post' : 'Create New Blog Post'}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                defaultValue={editingPost?.title}
                placeholder="Enter post title"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                defaultValue={editingPost?.excerpt}
                placeholder="Brief description of the post"
                rows={2}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                defaultValue={editingPost?.content}
                placeholder="Write your blog post content here..."
                rows={6}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select defaultValue={editingPost?.category || 'General'}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="React">React</SelectItem>
                    <SelectItem value="Backend">Backend</SelectItem>
                    <SelectItem value="CSS">CSS</SelectItem>
                    <SelectItem value="JavaScript">JavaScript</SelectItem>
                    <SelectItem value="General">General</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <Select defaultValue={editingPost?.status || 'draft'}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsDialogOpen(false)}>
                {editingPost ? 'Update' : 'Create'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}