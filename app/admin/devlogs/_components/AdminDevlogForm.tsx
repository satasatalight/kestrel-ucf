import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

interface Props<T extends FieldValues> {
  form: UseFormReturn<T>;
}

const AdminDevlogForm = <T extends FieldValues>({ form }: Props<T>) => {
  return (
    <>
      <FormField
        control={form.control}
        name={"title" as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Enter title" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={"description" as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Enter description" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={"videoUrl" as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Video URL</FormLabel>
            <FormControl>
              <Input
                {...field}
                value={field.value || ""}
                placeholder="https://example.com/video"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={"photoUrl" as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Photo URL</FormLabel>
            <FormControl>
              <Input
                {...field}
                value={field.value || ""}
                placeholder="https://example.com/photo"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default AdminDevlogForm;
