import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import villagerImage from "../images/villager.png";
import villageImage from "../images/village.png";
import lectureImage from "../images/lecture.png";

const BalloonMessage = ({ imageUrl, message, altMessage }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <img src={imageUrl} alt={altMessage} style={{ width: '200px', height: '300px', borderRadius: '50%' }} />
      <Paper sx={{ p: 2, marginLeft: 2, maxWidth: '400px', borderRadius: '10px', position: 'relative' }}>
        <Typography>{message}</Typography>
        <div
          style={{
            position: 'absolute',
            bottom: '-10px',
            left: '10px',
            width: '0',
            height: '0',
            borderTop: '10px solid transparent',
            borderRight: '10px solid white',
            borderBottom: '10px solid transparent',
          }}
        />
      </Paper>
    </Box>
  );
};

const Discription = () => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="body1">
        秋田県の山奥に広がる小さな村で、あなたはその一員として暮らしています<br />
        この美しい自然環境と静寂な日々が、あなたの生活の一部となっています<br />
        <img src={villageImage} alt="村の風景" style={{ width: '200px', height: '200px', borderRadius: '100%' }} /><br />
        そんな中で、あなたは入社2年目のシステムエンジニアとして働いています<br />
        Webシステムの開発に携わり、技術の力で新たな可能性を追求しています<br />
        <br />
        しかし、この地域ではITに関する専門的な仕事は珍しく、周囲の人々からはよく質問が寄せられます<br />
        ITについての知識や経験を持つあなたは、地域の人々にとっては頼りにされる存在となっています<br />
        時折、テクノロジーの進化や最新のトレンドについてのアドバイスを求められることもあり、地域社会への貢献が感じられる瞬間です<br />
        <img src={lectureImage} alt="村人へのアドバイス" style={{ width: '200px', height: '200px', borderRadius: '100%' }} /><br />
        <br />
        <br />
        <strong>そして今、村の役場の人々が何か困っているとのこと</strong><br />
        <br />
        あなたは自分の知識と技術を活かし、彼らの悩みを解決しようと決意しました<br />
        村役場は、地域の発展や住民の生活を支える重要な存在です<br />
        彼らが抱える問題を解決することで、より良いコミュニティを築く手助けをすることができるかもしれません<br />
        <br />
        未知の課題に立ち向かう決意を胸に、あなたは地域のために尽力し、村役場の人々の困りごとを共に解決していくことを考えています<br />
        <br />
      </Typography>
      <BalloonMessage imageUrl={villagerImage} message="「①」が「②」を「③」するシステムが欲しい" altMessage="役場の人" />
      <Typography variant="body1">
        <br />
        <br />
        ……が、訛りが強すぎて上手く聞き取れませんでした！<br />
        <br />
        <strong>そして、そう言い残した村人はあなたをこの部屋に閉じ込めてしまいました</strong><br />
        <br />
        謎を解いて村人の困りごとを解決し、部屋から脱出しましょう<br />
      </Typography>
    </Paper>
  );
};

export default Discription;
