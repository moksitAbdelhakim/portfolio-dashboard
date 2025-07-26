import { Search, Plus, Bell, Settings, User, LogOut } from 'lucide-react';
import { Button } from '@moksit-org/ui';
import { Input } from '@moksit-org/ui';
import { Avatar, AvatarFallback, AvatarImage } from '@moksit-org/ui';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@moksit-org/ui';

export function TopNavigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-medium">P</span>
            </div>
            <span className="hidden sm:inline-block">Portfolio Admin</span>
          </div>
        </div>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-sm transition-colors hover:text-primary">
            Dashboard
          </a>
          <a href="https://www.moksitabdelhakim.me" target='_parent' className="text-sm text-muted-foreground transition-colors hover:text-primary">
            Portfolio Preview
          </a>
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
            Settings (Comming Soon)
          </a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search Projects, Posts..."
              className="pl-8 w-[300px]"
            />
          </div>

          {/* New Project Button */}
          <Button className="hidden sm:flex">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>

          {/* Notifications */}
          <Button variant="outline" size="icon" className="hidden sm:inline-flex">
            <Bell className="h-4 w-4" />
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Abdelhakim" />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </div>
    </header>
  );
}