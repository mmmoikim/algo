const test = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok");
    }, 1000);
  });
};

async function main() {
  let data = await test();
  console.log(data);
}

main();
