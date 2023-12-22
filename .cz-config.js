const typeEnums = {
  feat: '새로운 기능 추가',
  fix: '버그 해결 / 수정',
  docs: '도큐멘테이션 추가 또는 수정',
  style: '스타일 추가',
  refactor: '리팩토링',
  revert: '작업 되돌리기',
  remove: '불필요한 파일 제거',
  perf: '성능 개선',
  ci: 'CI 구성 파일 및 스크립트 변경',
  config: '설정파일 변경 / 추가',
}

const maxSpaceLength = Object.keys(typeEnums).reduce(
  (acc, { length }) => (length > acc ? length : acc),
  0
)

const commitizenConfig = {
  types: Object.entries(typeEnums).map(([type, description]) => ({
    value: type,
    name:
      `${type}:     ${' '.repeat(maxSpaceLength - type.length)}` + description,
  })),
  skipQuestions: ['body', 'footer'],
  skipEmptyScopes: true,
}

module.exports = commitizenConfig
