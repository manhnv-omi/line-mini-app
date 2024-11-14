import { useState } from 'react';

export default function Survey() {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // Thực hiện các hành động gửi dữ liệu lên server tại đây nếu cần
    alert("Khảo sát đã được gửi. Cảm ơn bạn!");
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>アンケートに回答</h1>
      <p>以下の質問に回答してください。</p>

      <form onSubmit={handleSubmit}>
        {/* Thông tin cơ bản */}
        <label>
          年齢:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        
        <label>
          性別:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">選択してください</option>
            <option value="male">男性</option>
            <option value="female">女性</option>
            <option value="other">その他</option>
          </select>
        </label>
        <br />

        {/* Câu hỏi về trí nhớ */}
        <h3>1. 最近、日付や曜日を忘れることがありますか？</h3>
        <label>
          <input
            type="radio"
            name="question1"
            value="yes"
            checked={formData.question1 === 'yes'}
            onChange={handleChange}
            required
          /> はい
        </label>
        <label>
          <input
            type="radio"
            name="question1"
            value="no"
            checked={formData.question1 === 'no'}
            onChange={handleChange}
            required
          /> いいえ
        </label>

        <h3>2. 家族や知人の名前を忘れることが増えましたか？</h3>
        <label>
          <input
            type="radio"
            name="question2"
            value="yes"
            checked={formData.question2 === 'yes'}
            onChange={handleChange}
            required
          /> はい
        </label>
        <label>
          <input
            type="radio"
            name="question2"
            value="no"
            checked={formData.question2 === 'no'}
            onChange={handleChange}
            required
          /> いいえ
        </label>

        <h3>3. 同じ話を繰り返すことがありますか？</h3>
        <label>
          <input
            type="radio"
            name="question3"
            value="yes"
            checked={formData.question3 === 'yes'}
            onChange={handleChange}
            required
          /> はい
        </label>
        <label>
          <input
            type="radio"
            name="question3"
            value="no"
            checked={formData.question3 === 'no'}
            onChange={handleChange}
            required
          /> いいえ
        </label>

        <h3>4. 財布や鍵などをどこに置いたか忘れることがありますか？</h3>
        <label>
          <input
            type="radio"
            name="question4"
            value="yes"
            checked={formData.question4 === 'yes'}
            onChange={handleChange}
            required
          /> はい
        </label>
        <label>
          <input
            type="radio"
            name="question4"
            value="no"
            checked={formData.question4 === 'no'}
            onChange={handleChange}
            required
          /> いいえ
        </label>

        <h3>5. 最近、外出することが少なくなりましたか？</h3>
        <label>
          <input
            type="radio"
            name="question5"
            value="yes"
            checked={formData.question5 === 'yes'}
            onChange={handleChange}
            required
          /> はい
        </label>
        <label>
          <input
            type="radio"
            name="question5"
            value="no"
            checked={formData.question5 === 'no'}
            onChange={handleChange}
            required
          /> いいえ
        </label>

        {/* Nút gửi */}
        <button type="submit" style={{ marginTop: '20px' }}>
          送信
        </button>
      </form>
    </div>
  );
}
