"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";



const formSchema = z.object({
    name: z.string().min(1),
})

const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //create store function
    console.log(values);
}

export const StoreModal = () => {
    const storeModal = useStoreModal();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        }
    })
    return(
    <Modal title="create form"
        description="to create and add product and categoies"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
    ><div>
                <div className=" space-x-4 py-2 pb-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                            placeholder="E-Commerce"  {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
    )}
                            />
                            <div className="pt-6 space-x-2 items-center justify-end w-full">
                                <Button variant="outline" onClick={storeModal.onClose}>cancel</Button>
                                <Button type="submit" >continue</Button>
                                </div>
                        
                        </form>
                    </Form>
                </div>
                </div>
        </Modal>
    )
}