export const QuizListItem = ({quizId, title, questions, description, isPublished,
}: QuizListItemProps) => {
  const { isLocked, handlePublish, handleSelect } = useManageQuiz(quizId, questions, isPublished);

  return (
    <>
      <ListItem>
        <td>
          <Checkbox onClick={handlePublish} checked={isPublished} readOnly />
        </td>
        <td>
          <TextWrapper>
            <Title order={5} fw={500}>
              {title}
            </Title>
            <Text>{description}</Text>
          </TextWrapper>
        </td>
        <td>
          <ItemSettingsContainer>
            <Edit onClick={handleSelect} disabled={isLocked} />
            <QuizItemMenu quizId={quizId} />
          </ItemSettingsContainer>
        </td>
      </ListItem>
    </>
  );
};
