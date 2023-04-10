export const useTime = () => {
    const tm = new Date();
    const time = reactive({
        hour: tm.getHours(),
        minute: tm.getMinutes(),
        second: tm.getSeconds(),
        millisecond: tm.getMilliseconds(),
    });
    const update = (gapTime = 0) => setTimeout(() => {
        const tm = new Date();
        time.hour = tm.getHours();
        time.minute = tm.getMinutes();
        time.second = tm.getSeconds();
        time.millisecond = tm.getMilliseconds();
        update(1000 - time.millisecond);
    }, gapTime);
    update();
    return time;
}