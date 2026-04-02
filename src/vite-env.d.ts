declare module '*.scss'
declare module '*.module.css' {
    const classes: Readonly<Record<string, string>>
    export default classes
}
