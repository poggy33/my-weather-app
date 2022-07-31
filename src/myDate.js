const myDate = (destOffset) => {

    const today = new Date();
  
    const localOffset = -(today.getTimezoneOffset() / 60);
  
    const offset = destOffset - localOffset;
  
    const cityDate = new Date(new Date().getTime() + offset * 3600 * 1000)
      .toString()
      .slice(4, 24);
  
    const weekDays = [];
    let offsetForLoop = destOffset - localOffset;
    for (let i = 0; i < 12; i++) {
      const currentDay = new Date(new Date().getTime() + offsetForLoop * 3600 * 1000)
        .toString()
        .slice(0, 3);
      weekDays.push(currentDay);
      offsetForLoop +=6;
    }
    // console.log(weekDays);
  
    return {
      weekDays: weekDays,
      cityDate: cityDate,
    };
  };
  
  export default myDate;