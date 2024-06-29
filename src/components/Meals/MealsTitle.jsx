import React from "react";
import styled from "styled-components";

const Section = styled.section`
  text-align: center;
  max-width: 45rem;
  width: 90%;
  margin: auto;
  margin-top: -10rem;
  position: relative;
  background-color: #383838;
  color: white;
  border-radius: 14px;
  padding: 1rem;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h3`
  font-size: 2rem;
  margin-top: 0;
`;

function MealsTitle() {
  return (
    <Section>
      <Title>Кыргыз ашканасы</Title>
      <p>
        Кыргыз ашканасы — кыргыздардын улуттук тамак-ашы. Ар бир элдин ата-бабасынан бери жасап, жеп жүргөн улуттук тамак-ашы бар. 
      </p>
      <p>
        Эзелтеден бери кыргыз эли дагы өзүнүн тамак - аш өнөрүн өз алдынча өнүктүрүп келген. Кыргыз эли көбүнчө эт жана сүт азыктары менен тамактанган.!
      </p>
    </Section>
  );
}

export default MealsTitle;
