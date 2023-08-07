const authPage = (permissions: string | any[]) => {
    return (req: { body: { isAdmin: any } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): any; new(): any } } }, next: () => void) => {
        const userPermissions = req.body.isAdmin
        if (permissions.includes(userPermissions)) {
            next()
        } else {
            return res.status(401).json("You do not have permission")
        }
    }
}

module.exports = {authPage};