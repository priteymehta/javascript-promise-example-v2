let funcOne = () => {
  return 'one... ';
};

let funcTwo = async () => {
  return 'two.....';
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     //return `two... `;
  //     resolve('two');
  //   }, 5000);
  // });
};

let funcThree = () => {
  return 'three... ';
};

const _response = async () => {
  let _funcOneResponse = funcOne();
  console.log(_funcOneResponse);

  let _funcTwoResponse = await funcTwo().then((data) => {
    console.log(data);
  });

  let _funcThreeResponse = funcThree();
  console.log(_funcThreeResponse);
};

_response();
