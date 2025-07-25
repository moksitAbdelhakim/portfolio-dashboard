import {Button} from '@moksit-org/ui';
import { Eye } from 'lucide-react';
export function App() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-500 mt-8">Welcom to my portfolio</h1>
      <Button size="sm" variant="outline">
                    <Eye className="mr-2 h-3 w-3" />
                    Preview
                  </Button>
    </div>
  );
}

export default App;
