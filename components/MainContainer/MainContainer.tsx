import React from "react";
import { useUser } from "../../hooks/useUser";
import BackButton from "../BackButton/BackButton";

type Props = {
  children: React.ReactNode;
  className?: string;
  backRoute?: string;
  isShowLogo?: boolean;
};

export default function MainContainer({
    className,
    children,
    backRoute,
    isShowLogo = false,
}: Props) {
    const [isAuth, setIsAuth] = React.useState(false);

    const user = useUser();

    React.useEffect(() => {
        setIsAuth(!!user.authToken);
    }, [user.authToken]);

    return (
        <div className={`view bg-bombay${className ? ` ${className}` : ""}`}>
            <div className="container">
                {isShowLogo && (
                    <header className="header">
                        <div className="header__logo"></div>
                    </header>
                )}
                <div>
                    {backRoute && (
                        <div className="px-6 inline-block">
                            <BackButton href={backRoute} />
                        </div>
                    )}
                </div>
                {children}
            </div>
        </div>
    );
}
