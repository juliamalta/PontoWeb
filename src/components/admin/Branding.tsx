export function AdminLogo() {
    return (
        <div className="pontoweb-admin-brand">
            <img
                className="pontoweb-admin-brand__logo"
                src="/images/logo.png"
                alt="PontoWeb"
                width={280}
                height={94}
                fetchPriority="high"
            />
            <span className="pontoweb-admin-brand__caption">Painel de conteúdo</span>
        </div>
    )
}

export function AdminIcon() {
    return <img className="pontoweb-admin-icon" src="/images/logo.png" alt="PontoWeb" width={108} height={36} />
}
