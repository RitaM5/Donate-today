import React from 'react';
import { toast } from 'react-toastify';

const useMoney = () => {
      let input = document.getElementById("input-text");
      let inputText = toast(input.value);
      input.value = '';
      return inputText;
};

export default useMoney;