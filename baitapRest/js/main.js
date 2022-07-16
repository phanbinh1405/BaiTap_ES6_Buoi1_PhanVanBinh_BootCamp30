const calcKhoi1Element = document.querySelector('#btnKhoi1');
const calcKhoi2Element = document.querySelector('#btnKhoi2');

const validateDiem = (...score) => {
  let result = true;

  for (let i = 0; i < score.length; i++) {
    if (score[i] < 0 || score[i] > 10 || (!score[i] && score[i] !== 0)) {
      result = false;
      break;
    }
  }

  return result;
};



const tinhDiemTrungBinh = (...score) => {
  let result = 0;
  for (let i = 0; i < score.length; i++) {
    result += score[i];
  }

  return (result / score.length).toFixed(2);
};

calcKhoi1Element.addEventListener('click', () => {
  const diemToan = +document.querySelector('#inpToan').value;
  const diemLy = +document.querySelector('#inpLy').value;
  const diemHoa = +document.querySelector('#inpHoa').value;

  const isPass = validateDiem(diemToan, diemLy, diemHoa);

  if (isPass) {
    document.querySelector('#tbKhoi1').innerHTML = tinhDiemTrungBinh(diemHoa, diemLy, diemToan);
  } else {
    return alert('Vui lòng nhập điểm chính xác!');
  }
});

calcKhoi2Element.addEventListener('click', () => {
  const diemVan = +document.querySelector('#inpVan').value;
  const diemSu = +document.querySelector('#inpSu').value;
  const diemDia = +document.querySelector('#inpDia').value;
  const diemEnglish = +document.querySelector('#inpEnglish').value;

  const isPass = validateDiem(diemVan, diemSu, diemDia, diemEnglish);

  if (isPass) {
    document.querySelector('#tbKhoi2').innerHTML = tinhDiemTrungBinh(diemEnglish, diemDia, diemSu, diemVan);
  } else {
    return alert('Vui lòng nhập điểm chính xác!');
  }
});
