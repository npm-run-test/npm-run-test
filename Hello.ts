async function printf(text: string):Promise<void> {
    const printable = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ \t\n\r\v\f";

      let temp = "";
    
      for (const c of text) {
        for (const i of printable) {
          if (i === c || c === ' ') {
            setTimeout(() => {
              console.log(temp + i);
              temp += c;
            }, 2);
            break;
          } else {
            setTimeout(() => {
              console.log(temp + i);
            }, 20);
          }
        }
      }
}

printf("Hello, Everyone!")