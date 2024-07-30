import React, { useEffect, useState } from 'react'
import Audiproduct from '../components/sanphamaudi'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../redux/slice/cartSlice'


function Product() {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // axios.get('https://cellphone-s-json-server.onrender.com/api/productList').then(res => setList(res.data))
    setList(Product)
  }, []);

  const Product = [
    {
      id : "1",
      imgURL: 'https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grT4wV8zlWlb7yml2zf8mvc2X6wa2dy8AK1MU4D0iwaAEJvj9AgsODAUyCzMsAESdBfCYLZgYG1gogI5IBBPj4SotyChKLEnP1yjNTSjIENQyIBMLsLq4hjp4-wQDudZjY6QAAAA?wid=550',
      name: 'e-tron GT quattro',
      price: "Từ 4,250,000,000 VND",
    },
    {
      id : "2",
      imgURL: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grT_E7A6muRkPVa8knchW_L4vXEAr_wMAK1MU4H0iwaAEJvl9AgsODAUyCzMsEESdBfCYLZgYG1gogI5IBBPj4SotyChKLEnP1yjNTSjIENQyIBMLsLq4hjp4-wQAkEtle6QAAAA?wid=550",
      name: "RS e-tron GT",
      price: "Từ 5,350,000,000 VND",
    },
    {
      id : "3",
      imgURL: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grT19ZuI3_54-eIWtvsygXvJPpX3uyh4EVpOsfkGB-DyT4XgMJjmsMYBIkkwAiukB8JgNmBgbWCiAjkgEE-PhKi3IKEosSc_XKM1NKMgQ1DIgEwuwuriGOnj7BANODQ27pAAAA?wid=550",
      name: "Q8 e-tron",
      price: "Từ 3,800,000,000 VND",
    },
    {
      id : "4",
      imgURL: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grD1PO-tgsqbnzjhoHbvlx6n3T-UXrvjKwAnUx6gEJ5jtAgu8akODYxAAmQeaFgIgWEJ_JkpmBgbUCyIhkAAE-vtKinILEosRcvfLMlJIMQQ0DIoEwu4triKOnTzAAsnbrAOkAAAA?wid=550",
      name: "Audi e-tron",
      price: "",
    },
    {
      id : "5",
      imgURL: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grj2lfwe1XbKIPWCYGVmmz3RbY2X1-IQMrSNc8IMH8EkjwJwEJji4GMAmSMQQRW0F8Jl9mBgbWCiAjkgEE-PhKi3IKEosSc_XKM1NKMgQ1DIgEwuwuriGOnj7BAIg6BPPpAAAA?wid=550",
      name: "A4 Sendan",
      price: "Từ 1,650,000,000 VND",
    },
    {
      id : "6",
      imgURL: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grz_Sv61bMkVrEn38rXiGSo_O8kPjWrwysQF2MCkCC-ROQ4NsKJDiCGcAkyDwfELEWxGeyYmZgYK0AMiIZQICPr7QopyCxKDFXrzwzpSRDUMOASCDM7uIa4ujpEwwA_YfRY-kAAAA?wid=550",
      name: "A6 Sendan",
      price: "Từ 2,080,000,000 VND",
    },
    {
      id : "7",
      imgURL: "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4ka/2023.png?wid=550",
      name: "A7 Sportback",
      price: "Từ 2,950,000,000 VND",
    },
    {
      id : "8",
      imgURL: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grD9e15-F1PjfYpq5nVGd7-nnBd2EBTgZWkK4_QIKFH0jw7wQSHKEMYBIk4wYiDoP4TAbMDAysFUBGJAMI8PGVFuUUJBYl5uqVZ6aUZAhqGBAJhNldXEMcPX2CATO6Yx3pAAAA?wid=550",
      name: "A8 L",
      price: "Từ 4,100,000,000 VND",
    },
    {
      id : "9",
      imgURL: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grz-neyGOL1-n_mXLQ5PmpyKcn3XmuzGZgBepiUgYSzN-ABO9OIMERyQAmQebtBhE7QHwmC2YGBtYKICOSAQT4-EqLcgoSixJz9cozU0oyBDUMiATC7C6uIY6ePsEAWnbOlekAAAA?wid=550",
      name: "Q2",
      price: "Từ 1,400,000,000 VND",
    },
    {
      id : "10",
      imgURL: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grzwJD1vPypyYs__eVU0L1RUdw-q6AZAZWoC7Gg0CC-QWQ4LMHEhxnGMAkyLyFIKIIxGeSYGZgYK0AMiIZQICPr7QopyCxKDFXrzwzpSRDUMOASCDM7uIa4ujpEwwAeioihekAAAA?wid=550",
      name: "Q3",
      price: "Từ 1,800,000,000 VND",
    },
    {
      id : "11",
      imgURL: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grT_Lb32_t-dZeMdv89kPF7J9TdI3c7zOwAnUxHgcSzC-ABJ89kOA4wwAmQeZNAhGzQXwmP2YGBtYKICOSAQT4-EqLcgoSixJz9cozU0oyBDUMiATC7C6uIY6ePsEAmi7AiekAAAA?wid=550",
      name: "Q3 Sportback",
      price: "Từ 2,005,000,000 VND",
    },
    {
      id : "12",
      imgURL: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grT11p_F2jbyfEv9rX5ZYsXft620KeOwysQF2MfUCC-SyQ4GsAEhzrGcAkyLxyENEJ4jNZMjMwsFYAGZEMIMDHV1qUU5BYlJirV56ZUpIhqGFAJBBmd3ENcfT0CQYAcYX2YukAAAA?wid=550",
      name: "Q5",
      price: "Từ 2,299,000,000 VND",
    },
    {
      id : "13",
      imgURL: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grz9lntRLJ6SWMJ3c-MVXsr6_crv5uOgMrUBdjOZBgvgok-NqABMdGBjAJMq8ARPSC-EzWzAwMrBVARiQDCPDxlRblFCQWJebqlWemlGQIahgQCYTZXVxDHD19ggGh_06z6QAAAA?wid=550",
      name: "Q5 Sportback",
      price: "Từ 2,480,000,000 VND",
    },
    {
      id : "14",
      imgURL: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grz5qNxg_kWrKOHZW821s9sd5_wo2UrwysQF2MKkCCeTaQ4PsCJDiOMoBJkHkZIKISxGeyZGZgYK0AMiIZQICPr7QopyCxKDFXrzwzpSRDUMOASCDM7uIa4ujpEwwAl6L00OkAAAA?wid=550",
      name: "Q7",
      price: "Từ 3,400,000,000 VND",
    },
    {
      id : "15",
      imgURL: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grj27UEtbn-7Zp_ff_eGvZruwco5raKAZWoC5GXSDBfBRI8D0AEhw7GMAkyLxQEFEK4jMZMzMwsFYAGZEMIMDHV1qUU5BYlJirV56ZUpIhqGFAJBBmd3ENcfT0CQYASw-fb-kAAAA?wid=550",
      name: "Q8",
      price: "Từ 4,100,000,000 VND",
    },
  ]

  const addCart = (index) => {
    dispatch(addtoCart(Product[index]))

  }

  return (
    <div>
      <div className="flex justify-center mt-10  ">
        <div className="grid grid-cols-4 gap-20">
          {list.map((item, index) => (
            <Audiproduct key={index} item={item} addCart={() => addCart(index)} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product
