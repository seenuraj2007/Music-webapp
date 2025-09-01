import { supabase } from "../supabaseclient";

const loginUser = async (email: string, password: string) => {
    try {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) {
            console.log("login error:", error.message);
            return { error: error.message }

        }

    } catch (err) {
        console.log("Unexpected Error", err);
        return { error: "Something went wrong" }
    }
}

export default loginUser