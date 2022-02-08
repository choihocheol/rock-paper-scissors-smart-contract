if (window.ethereum) {
  window.web3 = new Web3(window.ethereum);

  window.ethereum.request({ method: 'eth_requestAccounts' }).then((result) => {
    document.getElementById('address').innerText = result[0];
  });
} else {
  document.getElementById('address').innerText =
    '현재 메타마스크 지갑에 연결되지 않았습니다. 메타마스크 지갑에 연결해주세요.';
}

document.getElementById('createBtn').onclick = async (event) => {
  let hand = document.getElementsByName('hand');
  for (let i = 0; i < hand.length; i++) {
    if (hand[i].checked) {
      hand = i;
      break;
    }
  }
  const time = Date.now();
  const code = window.web3.eth.abi.encodeParameters(
    ['uint8', 'uint256'],
    [hand, time],
  );
  const digest = window.web3.utils.keccak256(code);
  let money = document.getElementById('money').value;
  money = window.web3.utils.toWei(money, 'ether');

  const address = '0x6D0D0B706A4A10b22a92A0DD67e37AC3BB14598F';
  const contract = new web3.eth.Contract(abi, address);
  const roomNum = await contract.methods.createRoom(digest, time).call();
  document.getElementById('roomNum').value = roomNum;
  const result = contract.methods.createRoom(digest, time).send({
    from: document.getElementById('address').innerText,
    value: money,
  });
};

document.getElementById('joinBtn').onclick = (event) => {
  let hand = document.getElementsByName('hand');
  for (let i = 0; i < hand.length; i++) {
    if (hand[i].checked) {
      hand = i;
      break;
    }
  }
  const roomNum = Number(document.getElementById('roomNum').value);

  let money = document.getElementById('money').value;
  money = window.web3.utils.toWei(money, 'ether');

  const address = '0x6D0D0B706A4A10b22a92A0DD67e37AC3BB14598F';
  const contract = new web3.eth.Contract(abi, address);
  contract.methods.joinRoom(roomNum, hand).send({
    from: document.getElementById('address').innerText,
    value: money,
  });
};

document.getElementById('payOutBtn').onclick = async (event) => {
  const roomNum = Number(document.getElementById('roomNum').value);
  const address = '0x6D0D0B706A4A10b22a92A0DD67e37AC3BB14598F';
  const contract = new web3.eth.Contract(abi, address);
  const result = await contract.methods.payout(roomNum).send({
    from: document.getElementById('address').innerText,
  });
  const url = 'https://ropsten.etherscan.io/tx/' + result.transactionHash;
  window.open(url);
};
