const fechaHoraActualValidator = (control: any) => {
    const selectedDateTime = new Date(control.value);
    const now = new Date();
    if (selectedDateTime < now) {
        return { fechaHoraActual: true };
    }
    return null;
}

export { fechaHoraActualValidator };