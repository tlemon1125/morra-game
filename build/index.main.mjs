// Automatically generated with Reach 0.1.12 (4ca32459)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (4ca32459)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v336 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v337 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v337, v336],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:63:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v337, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v341, v342], secs: v344, time: v343, didSend: v67, from: v340 } = txn1;
      
      sim_r.txns.push({
        amt: v341,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v353 = stdlib.safeAdd(v343, v342);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v341, v342], secs: v344, time: v343, didSend: v67, from: v340 } = txn1;
  ;
  const v353 = stdlib.safeAdd(v343, v342);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v353],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v340, v341, v342, v353],
      evt_cnt: 0,
      funcNum: 2,
      lct: v343,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v525, time: v524, didSend: v285, from: v523 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v340,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v525, time: v524, didSend: v285, from: v523 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:54:35:application',
      fs: ['at ./index.rsh:53:13:application call to [unknown function] (defined at: ./index.rsh:53:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:70:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v359, time: v358, didSend: v76, from: v357 } = txn2;
    const v361 = stdlib.add(v341, v341);
    ;
    let v362 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v363 = v358;
    let v370 = v361;
    
    let txn3 = txn2;
    while (await (async () => {
      const v378 = stdlib.eq(v362, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v378;})()) {
      const v385 = stdlib.safeAdd(v363, v342);
      const v389 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:78:48:application',
        fs: ['at ./index.rsh:77:19:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v390 = stdlib.protect(ctc0, await interact.getGuess(v389), {
        at: './index.rsh:79:50:application',
        fs: ['at ./index.rsh:77:19:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      const v391 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:80:70:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:77:19:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v392 = stdlib.digest([ctc0, ctc0], [v391, v389]);
      const v394 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:81:72:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:77:19:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v395 = stdlib.digest([ctc0, ctc0], [v394, v390]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v340, v341, v342, v357, v370, v385, v392, v395],
        evt_cnt: 2,
        funcNum: 4,
        lct: v363,
        onlyIf: true,
        out_tys: [ctc1, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:86:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v398, v399], secs: v401, time: v400, didSend: v108, from: v397 } = txn4;
          
          ;
          const v409 = stdlib.safeAdd(v400, v342);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v385],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v340, v341, v342, v357, v370, v385],
          evt_cnt: 0,
          funcNum: 5,
          lct: v363,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v491, time: v490, didSend: v238, from: v489 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v357,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v491, time: v490, didSend: v238, from: v489 } = txn5;
        ;
        const v492 = stdlib.addressEq(v340, v489);
        const v493 = stdlib.addressEq(v357, v489);
        const v494 = v492 ? true : v493;
        stdlib.assert(v494, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:86:103:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:54:35:application',
          fs: ['at ./index.rsh:53:13:application call to [unknown function] (defined at: ./index.rsh:53:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:86:103:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v398, v399], secs: v401, time: v400, didSend: v108, from: v397 } = txn4;
        ;
        const v402 = stdlib.addressEq(v340, v397);
        stdlib.assert(v402, {
          at: './index.rsh:86:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v409 = stdlib.safeAdd(v400, v342);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v409],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v340, v341, v342, v357, v370, v398, v399, v409],
            evt_cnt: 0,
            funcNum: 7,
            lct: v400,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v473, time: v472, didSend: v204, from: v471 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v340,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v473, time: v472, didSend: v204, from: v471 } = txn6;
          ;
          const v474 = stdlib.addressEq(v340, v471);
          const v475 = stdlib.addressEq(v357, v471);
          const v476 = v474 ? true : v475;
          stdlib.assert(v476, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:96:85:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:54:35:application',
            fs: ['at ./index.rsh:53:13:application call to [unknown function] (defined at: ./index.rsh:53:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:96:85:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v416, v417], secs: v419, time: v418, didSend: v120, from: v415 } = txn5;
          ;
          const v420 = stdlib.addressEq(v357, v415);
          stdlib.assert(v420, {
            at: './index.rsh:96:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v427 = stdlib.safeAdd(v418, v342);
          const txn6 = await (ctc.sendrecv({
            args: [v340, v341, v342, v357, v370, v398, v399, v416, v417, v427, v389, v390, v391, v394],
            evt_cnt: 4,
            funcNum: 8,
            lct: v418,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:106:15:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v432, v433, v434, v435], secs: v437, time: v436, didSend: v132, from: v431 } = txn6;
              
              ;
              let v443;
              const v444 = stdlib.safeAdd(v432, v416);
              const v445 = stdlib.eq(v444, v433);
              const v446 = stdlib.eq(v444, v417);
              const v447 = v446 ? false : true;
              const v448 = v445 ? v447 : false;
              if (v448) {
                v443 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                const v451 = v445 ? false : true;
                const v452 = v446 ? v451 : false;
                if (v452) {
                  v443 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                  }
                else {
                  v443 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                }
              const cv362 = v443;
              const cv363 = v436;
              const cv370 = v370;
              
              await (async () => {
                const v362 = cv362;
                const v363 = cv363;
                const v370 = cv370;
                
                if (await (async () => {
                  const v378 = stdlib.eq(v362, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v378;})()) {
                  const v385 = stdlib.safeAdd(v363, v342);
                  sim_r.isHalt = false;
                  }
                else {
                  const v507 = stdlib.eq(v362, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  const v510 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:116:14:decimal', stdlib.UInt_max, '2'), v341);
                  const v512 = v507 ? v340 : v357;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v512,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v427],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v340, v341, v342, v357, v370, v398, v399, v416, v417, v427],
              evt_cnt: 0,
              funcNum: 9,
              lct: v418,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v455, time: v454, didSend: v170, from: v453 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v357,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v455, time: v454, didSend: v170, from: v453 } = txn7;
            ;
            const v456 = stdlib.addressEq(v340, v453);
            const v457 = stdlib.addressEq(v357, v453);
            const v458 = v456 ? true : v457;
            stdlib.assert(v458, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:106:122:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:54:35:application',
              fs: ['at ./index.rsh:53:13:application call to [unknown function] (defined at: ./index.rsh:53:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:106:122:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v432, v433, v434, v435], secs: v437, time: v436, didSend: v132, from: v431 } = txn6;
            ;
            const v438 = stdlib.addressEq(v340, v431);
            stdlib.assert(v438, {
              at: './index.rsh:106:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v439 = stdlib.digest([ctc0, ctc0], [v434, v432]);
            const v440 = stdlib.digestEq(v398, v439);
            stdlib.assert(v440, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:107:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v441 = stdlib.digest([ctc0, ctc0], [v435, v433]);
            const v442 = stdlib.digestEq(v399, v441);
            stdlib.assert(v442, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:108:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            let v443;
            const v444 = stdlib.safeAdd(v432, v416);
            const v445 = stdlib.eq(v444, v433);
            const v446 = stdlib.eq(v444, v417);
            const v447 = v446 ? false : true;
            const v448 = v445 ? v447 : false;
            if (v448) {
              v443 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
              }
            else {
              const v451 = v445 ? false : true;
              const v452 = v446 ? v451 : false;
              if (v452) {
                v443 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                }
              else {
                v443 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              }
            const cv362 = v443;
            const cv363 = v436;
            const cv370 = v370;
            
            v362 = cv362;
            v363 = cv363;
            v370 = cv370;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v507 = stdlib.eq(v362, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v510 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:116:14:decimal', stdlib.UInt_max, '2'), v341);
    const v512 = v507 ? v340 : v357;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v362), {
      at: './index.rsh:120:28:application',
      fs: ['at ./index.rsh:119:9:application call to [unknown function] (defined at: ./index.rsh:119:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v341, v342], secs: v344, time: v343, didSend: v67, from: v340 } = txn1;
  ;
  const v353 = stdlib.safeAdd(v343, v342);
  stdlib.protect(ctc1, await interact.acceptWager(v341), {
    at: './index.rsh:67:29:application',
    fs: ['at ./index.rsh:66:13:application call to [unknown function] (defined at: ./index.rsh:66:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v340, v341, v342, v353],
    evt_cnt: 0,
    funcNum: 1,
    lct: v343,
    onlyIf: true,
    out_tys: [],
    pay: [v341, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v359, time: v358, didSend: v76, from: v357 } = txn2;
      
      const v361 = stdlib.add(v341, v341);
      sim_r.txns.push({
        amt: v341,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v362 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v363 = v358;
      const v370 = v361;
      
      if (await (async () => {
        const v378 = stdlib.eq(v362, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v378;})()) {
        const v385 = stdlib.safeAdd(v363, v342);
        sim_r.isHalt = false;
        }
      else {
        const v507 = stdlib.eq(v362, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v510 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:116:14:decimal', stdlib.UInt_max, '2'), v341);
        const v512 = v507 ? v340 : v357;
        sim_r.txns.push({
          kind: 'from',
          to: v512,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v353],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v340, v341, v342, v353],
      evt_cnt: 0,
      funcNum: 2,
      lct: v343,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v525, time: v524, didSend: v285, from: v523 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v340,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v525, time: v524, didSend: v285, from: v523 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:54:35:application',
      fs: ['at ./index.rsh:53:13:application call to [unknown function] (defined at: ./index.rsh:53:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:70:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v359, time: v358, didSend: v76, from: v357 } = txn2;
    const v361 = stdlib.add(v341, v341);
    ;
    let v362 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v363 = v358;
    let v370 = v361;
    
    let txn3 = txn2;
    while (await (async () => {
      const v378 = stdlib.eq(v362, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v378;})()) {
      const v385 = stdlib.safeAdd(v363, v342);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v385],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v340, v341, v342, v357, v370, v385],
          evt_cnt: 0,
          funcNum: 5,
          lct: v363,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v491, time: v490, didSend: v238, from: v489 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v357,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v491, time: v490, didSend: v238, from: v489 } = txn5;
        ;
        const v492 = stdlib.addressEq(v340, v489);
        const v493 = stdlib.addressEq(v357, v489);
        const v494 = v492 ? true : v493;
        stdlib.assert(v494, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:86:103:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:54:35:application',
          fs: ['at ./index.rsh:53:13:application call to [unknown function] (defined at: ./index.rsh:53:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:86:103:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v398, v399], secs: v401, time: v400, didSend: v108, from: v397 } = txn4;
        ;
        const v402 = stdlib.addressEq(v340, v397);
        stdlib.assert(v402, {
          at: './index.rsh:86:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v409 = stdlib.safeAdd(v400, v342);
        const v413 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:92:56:application',
          fs: ['at ./index.rsh:91:17:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        const v414 = stdlib.protect(ctc0, await interact.getGuess(v413), {
          at: './index.rsh:93:58:application',
          fs: ['at ./index.rsh:91:17:application call to [unknown function] (defined at: ./index.rsh:91:21:function exp)'],
          msg: 'getGuess',
          who: 'Bob'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v340, v341, v342, v357, v370, v398, v399, v409, v413, v414],
          evt_cnt: 2,
          funcNum: 6,
          lct: v400,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:96:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v416, v417], secs: v419, time: v418, didSend: v120, from: v415 } = txn5;
            
            ;
            const v427 = stdlib.safeAdd(v418, v342);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v409],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v340, v341, v342, v357, v370, v398, v399, v409],
            evt_cnt: 0,
            funcNum: 7,
            lct: v400,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v473, time: v472, didSend: v204, from: v471 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v340,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v473, time: v472, didSend: v204, from: v471 } = txn6;
          ;
          const v474 = stdlib.addressEq(v340, v471);
          const v475 = stdlib.addressEq(v357, v471);
          const v476 = v474 ? true : v475;
          stdlib.assert(v476, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:96:85:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:54:35:application',
            fs: ['at ./index.rsh:53:13:application call to [unknown function] (defined at: ./index.rsh:53:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:96:85:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v416, v417], secs: v419, time: v418, didSend: v120, from: v415 } = txn5;
          ;
          const v420 = stdlib.addressEq(v357, v415);
          stdlib.assert(v420, {
            at: './index.rsh:96:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v427 = stdlib.safeAdd(v418, v342);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: ['time', v427],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v340, v341, v342, v357, v370, v398, v399, v416, v417, v427],
              evt_cnt: 0,
              funcNum: 9,
              lct: v418,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v455, time: v454, didSend: v170, from: v453 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v357,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v455, time: v454, didSend: v170, from: v453 } = txn7;
            ;
            const v456 = stdlib.addressEq(v340, v453);
            const v457 = stdlib.addressEq(v357, v453);
            const v458 = v456 ? true : v457;
            stdlib.assert(v458, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:106:122:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:54:35:application',
              fs: ['at ./index.rsh:53:13:application call to [unknown function] (defined at: ./index.rsh:53:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:106:122:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v432, v433, v434, v435], secs: v437, time: v436, didSend: v132, from: v431 } = txn6;
            ;
            const v438 = stdlib.addressEq(v340, v431);
            stdlib.assert(v438, {
              at: './index.rsh:106:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v439 = stdlib.digest([ctc0, ctc0], [v434, v432]);
            const v440 = stdlib.digestEq(v398, v439);
            stdlib.assert(v440, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:107:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v441 = stdlib.digest([ctc0, ctc0], [v435, v433]);
            const v442 = stdlib.digestEq(v399, v441);
            stdlib.assert(v442, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:108:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            let v443;
            const v444 = stdlib.safeAdd(v432, v416);
            const v445 = stdlib.eq(v444, v433);
            const v446 = stdlib.eq(v444, v417);
            const v447 = v446 ? false : true;
            const v448 = v445 ? v447 : false;
            if (v448) {
              v443 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
              }
            else {
              const v451 = v445 ? false : true;
              const v452 = v446 ? v451 : false;
              if (v452) {
                v443 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                }
              else {
                v443 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              }
            const cv362 = v443;
            const cv363 = v436;
            const cv370 = v370;
            
            v362 = cv362;
            v363 = cv363;
            v370 = cv370;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v507 = stdlib.eq(v362, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v510 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:116:14:decimal', stdlib.UInt_max, '2'), v341);
    const v512 = v507 ? v340 : v357;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v362), {
      at: './index.rsh:120:28:application',
      fs: ['at ./index.rsh:119:9:application call to [unknown function] (defined at: ./index.rsh:119:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAOAAFQCAUJIAcCKJgBqAFYMCYDAQABAQAiNQAxGEEFCCpkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAApVJIQcMQAGJSSUMQAEwSSEFDEAAViEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABKIFZo6wMgY0AyELWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgQgSCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/0k1BUlKIls1/iVbNf2BEFs1/IEYWzX7gAR/ojtSNP4WUDT9FlA0/BZQNPsWULAyBjQDIQtbDEQ0/zEAEkQ0A1dYIDT8FjT+FlABEkQ0A1d4IDT7FjT9FlABEkQ0/jQDIQpbCEk1+TT9EjX4NPk0A4GgAVsSNfc0+DT3FBBBAAYiNfpCABM09zT4FBBBAAchCDX6QgADIzX6NP80AyEGWzQDIQlbNANXMCA0+jIGNAMkW0IC7EghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOIbs6mwMgY0AyEKWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgL6SYEGDEAArkghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/IQZbNf4hCVs1/VcwIDX8JFs1+1dYIDX6V3ggNflJNQVJIls1+CVbNfeABEohy/w0+BZQNPcWULAyBjQDIQpbDEQ0/DEAEkQyBjT9CDX2NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQNPcWUDT2FlAoSwFXAH9nKUsBV38xZ0ghBTUBMgY1AkICYUghBDQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABMyZklywMgY0AyEMWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgH1SSEIDEAA4EmBBAxAAJhIIQQ0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQZbNf4hCVs1/VcwIDX8JFs1+0k1BUlXACA1+lcgIDX5gARgXaQrNPpQNPlQsDIGNAMhDFsMRDT/MQASRDIGNP0INfg0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlAoSwFXAH9nKUsBV38hZ0ghBzUBMgY1AkIBayEIEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ1bD0SxIrIBNAMhBluyCCOyEDQDVwAgsgezQgEOSSMMQABISCM0ARJENARJIhJMNAISEUQoZEk1AyEGWzX/gASai5F0sDIGNAMhDVsMRDT/iAFGNANXACA0/zQDIQlbMQAjMgY0/0kIQgBfSIGgjQaIASYiNAESRDQESSISTDQCEhFESTUFSSJbNf8lWzX+gASs0R/DNP8WUDT+FlCwNP+IAPYyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCAH01/zX+Nf01/DX7Nfo1+TT9IxJBAC80/jT7CDX4NPk0+hZQNPsWUDT8UDT/FlA0+BZQKEsBVwBgZ0ghBDUBMgY1AkIAObEisgEhCDT6C7III7IQNPw0+TT9IhJNsgezQgAAMRkhBBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v341",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v342",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v341",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v342",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v398",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v399",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v416",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v417",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v432",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v433",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v434",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v435",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v398",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v399",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v416",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v417",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v432",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v433",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v434",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v435",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001e0f38038062001e0f8339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611a92806200037d6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063ab53f2c614610128578063bf2c5b241461014b578063cc923b291461015e578063de73699814610171578063ebdbfdcc1461018457005b80631e93b0f1146100a357806321642639146100c75780632c10a159146100da5780637eea518c146100ed578063832307571461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d536600461157d565b610197565b6100a16100e83660046115a0565b6103fc565b6100a16100fb3660046115a0565b61058b565b34801561010c57600080fd5b506001546100b4565b6100a16101233660046115a0565b610709565b34801561013457600080fd5b5061013d6108a4565b6040516100be9291906115b2565b6100a16101593660046115a0565b610941565b6100a161016c36600461160f565b610ad8565b6100a161017f3660046115a0565b610e0d565b6100a161019236600461157d565b610f68565b6101a7600760005414601c6111d9565b6101c1813515806101ba57506001548235145b601d6111d9565b6000808055600280546101d390611621565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff90611621565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b505050505080602001905181019061026491906116aa565b905061027c6040518060200160405280600081525090565b61028d8260e001514310601e6111d9565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f33846040516102be929190611756565b60405180910390a16102d23415601a6111d9565b60608201516102ed906001600160a01b03163314601b6111d9565b6102fb4383604001516111ff565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e084015285820135610100840152835161012084015260096000554360015590516103d191839101611787565b604051602081830303815290604052600290805190602001906103f5929190611436565b5050505050565b61040c60016000541460096111d9565b6104268135158061041f57506001548235145b600a6111d9565b60008080556002805461043890611621565b80601f016020809104026020016040519081016040528092919081815260200182805461046490611621565b80156104b15780601f10610486576101008083540402835291602001916104b1565b820191906000526020600020905b81548152906001019060200180831161049457829003601f168201915b50505050508060200190518101906104c9919061180e565b90506104dc81606001514310600b6111d9565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161050d929190611887565b60405180910390a16105268160200151341460086111d9565b61052e6114ba565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160019052514392019190915251800160208201516040015261058681611252565b505050565b61059b600160005414600d6111d9565b6105b5813515806105ae57506001548235145b600e6111d9565b6000808055600280546105c790611621565b80601f01602080910402602001604051908101604052809291908181526020018280546105f390611621565b80156106405780601f1061061557610100808354040283529160200191610640565b820191906000526020600020905b81548152906001019060200180831161062357829003601f168201915b5050505050806020019051810190610658919061180e565b905061066c8160600151431015600f6111d9565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161069d929190611887565b60405180910390a16106b13415600c6111d9565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b506000808055600181905561070590600290611513565b5050565b61071960056000541460176111d9565b6107338135158061072c57506001548235145b60186111d9565b60008080556002805461074590611621565b80601f016020809104026020016040519081016040528092919081815260200182805461077190611621565b80156107be5780601f10610793576101008083540402835291602001916107be565b820191906000526020600020905b8154815290600101906020018083116107a157829003601f168201915b50505050508060200190518101906107d691906118c4565b90506107ea8160a0015143101560196111d9565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161081b929190611887565b60405180910390a161082f341560156111d9565b8051610863906001600160a01b031633146108595760608201516001600160a01b0316331461085c565b60015b60166111d9565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156106ee573d6000803e3d6000fd5b6000606060005460028080546108b990611621565b80601f01602080910402602001604051908101604052809291908181526020018280546108e590611621565b80156109325780601f1061090757610100808354040283529160200191610932565b820191906000526020600020905b81548152906001019060200180831161091557829003601f168201915b50505050509050915091509091565b61095160076000541460216111d9565b61096b8135158061096457506001548235145b60226111d9565b60008080556002805461097d90611621565b80601f01602080910402602001604051908101604052809291908181526020018280546109a990611621565b80156109f65780601f106109cb576101008083540402835291602001916109f6565b820191906000526020600020905b8154815290600101906020018083116109d957829003601f168201915b5050505050806020019051810190610a0e91906116aa565b9050610a228160e0015143101560236111d9565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a53929190611887565b60405180910390a1610a673415601f6111d9565b8051610a9b906001600160a01b03163314610a915760608201516001600160a01b03163314610a94565b60015b60206111d9565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b610ae860096000541460286111d9565b610b0281351580610afb57506001548235145b60296111d9565b600080805560028054610b1490611621565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4090611621565b8015610b8d5780601f10610b6257610100808354040283529160200191610b8d565b820191906000526020600020905b815481529060010190602001808311610b7057829003601f168201915b5050505050806020019051810190610ba59190611958565b9050610bd6604051806080016040528060008152602001600081526020016000151581526020016000151581525090565b610be88261012001514310602a6111d9565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c5b341560246111d9565b8151610c73906001600160a01b0316331460256111d9565b604051610cc090610c9a906060860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a001511460266111d9565b60408051608085013560208201528482013591810191909152610d06906060016040516020818303038152906040528051906020012060001c8360c001511460276111d9565b610d1b83602001600001358360e001516111ff565b6020820181905260408085013582149083018190526101008401519091146060830152610d49576000610d5c565b8060600151610d59576001610d5c565b60005b15610d6a5760008152610da0565b8060600151610d7a576000610d8d565b8060400151610d8a576001610d8d565b60005b15610d9b5760028152610da0565b600181525b610da86114ba565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551941693019290925283518184018051919091528051439201919091526080850151905190910152610e0781611252565b50505050565b610e1d600960005414602d6111d9565b610e3781351580610e3057506001548235145b602e6111d9565b600080805560028054610e4990611621565b80601f0160208091040260200160405190810160405280929190818152602001828054610e7590611621565b8015610ec25780601f10610e9757610100808354040283529160200191610ec2565b820191906000526020600020905b815481529060010190602001808311610ea557829003601f168201915b5050505050806020019051810190610eda9190611958565b9050610eef816101200151431015602f6111d9565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051610f20929190611887565b60405180910390a1610f343415602b6111d9565b8051610863906001600160a01b03163314610f5e5760608201516001600160a01b03163314610f61565b60015b602c6111d9565b610f7860056000541460126111d9565b610f9281351580610f8b57506001548235145b60136111d9565b600080805560028054610fa490611621565b80601f0160208091040260200160405190810160405280929190818152602001828054610fd090611621565b801561101d5780601f10610ff25761010080835404028352916020019161101d565b820191906000526020600020905b81548152906001019060200180831161100057829003601f168201915b505050505080602001905181019061103591906118c4565b905061104d6040518060200160405280600081525090565b61105e8260a00151431060146111d9565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a338460405161108f929190611756565b60405180910390a16110a3341560106111d9565b81516110bb906001600160a01b0316331460116111d9565b6110c94383604001516111ff565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e084015260076000554360015590516103d19183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b816107055760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60008261120c8382611a03565b915081101561124c5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016111f6565b92915050565b60408051602081019091526000815260208201515160011415611376576112898260200151602001518360000151604001516111ff565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610e07929190611436565b6020820151511561138c57815160600151611390565b8151515b6001600160a01b03166108fc6113af60028560000151602001516113d7565b6040518115909202916000818181858888f193505050501580156106ee573d6000803e3d6000fd5b60008115806113fb575082826113ed8183611a1b565b92506113f99083611a3a565b145b61124c5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016111f6565b82805461144290611621565b90600052602060002090601f01602090048101928261146457600085556114aa565b82601f1061147d57805160ff19168380011785556114aa565b828001600101855582156114aa579182015b828111156114aa57825182559160200191906001019061148f565b506114b6929150611550565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161150e60405180606001604052806000815260200160008152602001600081525090565b905290565b50805461151f90611621565b6000825580601f1061152f575050565b601f01602090049060005260206000209081019061154d9190611550565b50565b5b808211156114b65760008155600101611551565b60006060828403121561157757600080fd5b50919050565b60006060828403121561158f57600080fd5b6115998383611565565b9392505050565b60006040828403121561157757600080fd5b82815260006020604081840152835180604085015260005b818110156115e6578581018301518582016060015282016115ca565b818111156115f8576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561157757600080fd5b600181811c9082168061163557607f821691505b6020821081141561157757634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561168857634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146116a557600080fd5b919050565b60006101008083850312156116be57600080fd5b6040519081019067ffffffffffffffff821181831017156116ef57634e487b7160e01b600052604160045260246000fd5b816040526116fc8461168e565b8152602084015160208201526040840151604082015261171e6060850161168e565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b03831681526080810161159960208301848035825260208082013590830152604090810135910152565b81516001600160a01b031681526101408101602083015160208301526040830151604083015260608301516117c760608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b60006080828403121561182057600080fd5b6040516080810181811067ffffffffffffffff8211171561185157634e487b7160e01b600052604160045260246000fd5b60405261185d8361168e565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146118b557600080fd5b80604085015250509392505050565b600060c082840312156118d657600080fd5b60405160c0810181811067ffffffffffffffff8211171561190757634e487b7160e01b600052604160045260246000fd5b6040526119138361168e565b815260208301516020820152604083015160408201526119356060840161168e565b60608201526080830151608082015260a083015160a08201528091505092915050565b6000610140828403121561196b57600080fd5b611973611656565b61197c8361168e565b8152602083015160208201526040830151604082015261199e6060840161168e565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611a1657611a166119ed565b500190565b6000816000190483118215151615611a3557611a356119ed565b500290565b600082611a5757634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220943c8cea1ecf3e54ff07693b0ac82ff45597ef55d5a2d606d58bf58baceed2a164736f6c634300080c0033`,
  BytecodeLen: 7695,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:64:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:70:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:117:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:75:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:86:103:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:87:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:96:85:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:97:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:106:122:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
