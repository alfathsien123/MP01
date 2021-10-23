function x() {
  return {
    name: [
      {
        yz: [
          {},
          {},
          {
            ab: () => {
              return {
                cd: "Hello World",
              };
            },
          },
        ],
      },
    ],
  };
}

console.log(x().name[0].yz[2].ab().cd);
