import { Delete, Edit } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AddBlog from "./AddBlog";
import { DTOBlogs } from "@/types";

export function EditDelete({ blog }: { blog: DTOBlogs }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">...</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenu>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <AddBlog
                blog={blog}
                title="Update Blog"
                description="Update your Blog, make sure you save the changes"
              >
                <div className="flex gap-1">
                  <Edit className="mr-2 h-4 w-4" />
                  <span>Edit</span>
                </div>
              </AddBlog>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Delete />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenu>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
