import Image from "next/image";

export interface BoxProps {
    title: string,
    children: React.ReactNode | undefined,
    repoUrl: string,
}

export function Box({ title, children, repoUrl }: BoxProps) {
    return <>
        <div className="card w-full shadow-xl bg-neutral image-full">
            <figure className="text-9xl text-slate-700">TCP1P</figure>
            <div className="card-body">
                <h2 className="card-title"><a className="link" target="_blank" href={repoUrl}>{title}</a></h2>
                <p className="text-justify">{children}</p>
            </div>
        </div>
    </>
}
