"use client";

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
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function EditDelete({ blog }: { blog: DTOBlogs }) {
  const router = useRouter();
  async function handleDeleteById() {
    try {
      const apiResponse = await fetch(
        `http://localhost:3000/api/blogs/${blog._id}`,
        {
          method: "DELETE",
        }
      );
      const result = await apiResponse.json();
      if (result?.success) {
        toast("Succeed deleted blog data", {
          description: "Page Updated",
        });
        router.push("/blogs");
        router.refresh();
      }
    } catch (error) {
      console.error(error);
      toast("Failed deleted blog data", {
        description: "Page Updated",
      });
    }
  }

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
            <DropdownMenuItem onClick={handleDeleteById}>
              <Delete />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenu>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
