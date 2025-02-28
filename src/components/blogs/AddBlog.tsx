"use client";

import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ReactNode, useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";

export default function AddBlog({
  title,
  description,
  blog,
  children,
}: {
  title: string;
  description: string;
  blog?: any;
  children: ReactNode;
}) {
  const initialState = {
    title: "",
    description: "",
    imageURL: "",
  };
  const [openBlogDialog, setOpenBlogDialog] = useState<boolean>(false);
  const [formData, setFormData] = useState(initialState);
  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title,
        description: blog.description,
        imageURL: blog.imageURL,
      });
    }
  }, [blog]);
  return (
    <div>
      <div onClick={() => setOpenBlogDialog(true)}>{children}</div>
      <Dialog
        open={openBlogDialog}
        onOpenChange={() => setOpenBlogDialog(false)}
      >
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="imageURL" className="text-right">
                image URL
              </Label>
              <Input
                id="imageURL"
                name="imageURL"
                value={formData.imageURL}
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                className="col-span-3"
              />
            </div>
          </div>

          <DialogFooter>
            <Button onClick={() => setOpenBlogDialog(false)} type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
