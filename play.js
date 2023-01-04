// const fetchdata = () => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Done!..');
//         }, 1500);
//     });
//     return promise;
// };

// setTimeout(() => {
//      console.log('Timer on 2s');
//      fetchdata().then((done) => {
//         console.log(done);
//         return fetchdata();
//      })
//      .then(text => {
//         console.log(text);
//      });
// }, 2000);

// console.log('hello');
// console.log('hi');

// console.log('a');

// console.log('b');

// const prtdt = () => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('c');
//             setTimeout(() => {
//                 console.log('d');
//                 resolve('e');
//             })
//         }, 3000);
//     });
//     return promise;
// }

// prtdt().then((data) => console.log(data));

const prtdt = async() => {
    console.log('a');
    console.log('b');

    // await new Promise((resolve,reject) => {
    //     setTimeout(() => {
    //         console.log('c');
    //         resolve();
    //     },3000);
    // });

    const cc = new Promise((res,rej) => {
        setTimeout(() => res(console.log('c')), 3000);
    });
    
    await cc;

    const dd = new Promise((res,rej) => {
        setTimeout(() => res(console.log('d')), 0);
    });

    await dd;
    console.log(cc,dd);
    // await new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         console.log('d');
    //         resolve();
    //     },0);
    // });

    console.log('e');
}
prtdt();