import React from "react";
import styled from "styled-components";
import Mail from "../assets/mail.svg?react";
import Like from "../assets/like.svg?react";
import NotLike from "../assets/not-like.svg?react";

const Question = {
  Container: styled.button`
    padding: 30px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    > p {
      word-break: break-word;
      overflow-wrap: break-word;
      overflow: auto;
      text-align: left;

      &::-webkit-scrollbar {
        display: none;
      }

      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `,
};

const Stats = {
  Container: styled.div`
    display: flex;
    border-top: 1px solid var(--bd-color);
    padding-block: 10px;
    justify-content: space-between;
  `,
  StatWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
};

const QuestionCard: React.FC<{ name: string; id?: string }> = ({
  name,
  id,
}) => {
  return (
    <Question.Container>
      <p>{name}</p>
      <Stats.Container>
        <Stats.StatWrapper>
          <p>100</p>
          <Mail />
        </Stats.StatWrapper>
        <Stats.StatWrapper>
          <p>83</p>
          <Like />
        </Stats.StatWrapper>
        <Stats.StatWrapper>
          <p>29</p>
          <NotLike />
        </Stats.StatWrapper>
      </Stats.Container>
    </Question.Container>
  );
};

export default QuestionCard;
