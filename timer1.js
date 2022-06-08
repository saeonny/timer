let args = process.argv;

if (args.length === 2) {
  console.log("please insert input");

} else {
  args.slice(2);
  for (let time of args) {
    if (Number(time) > 0) {
      setTimeout(()=>{
        process.stdout.write('\x07');
        console.log("beep!",time);
      },Number(time) * 1000);
    }
  }
}