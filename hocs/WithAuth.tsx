import { NextComponentType } from "next";
import { BaseContext } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import React from "react";
import { useUser } from "../hooks/useUser";

function withAuth<T extends BaseContext>(Component: NextComponentType<T>) {
    const Auth = (props: T) => {
        const [isLoading, setIsLoading] = React.useState(true);
        const router = useRouter();
        const user = useUser();

        React.useEffect(() => {
            if (!user.authToken) {
                router.push('/');
            } else {
                setIsLoading(false);
            }
        }, [router, user]);

        if (isLoading) {
            return null;
        }

        return <Component {...props as any} />;
    };


    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }

    return Auth;
}

export default withAuth;