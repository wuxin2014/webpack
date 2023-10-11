export function loading() {
    import('./utils').then(res => {
        console.log('res====', res)
    })
}