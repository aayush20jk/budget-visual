import { redirect } from "react-router-dom";

// import helpers
import { deletItem } from "../helper";

// helpers
import { toast } from "react-toastify";

export async function logoutAction() {
    // delete the user 
    deletItem({ 
        key : "userName" 
    })
    toast.success("You deleted your account!")

    // redirect it to home page
    return  redirect("/");
}