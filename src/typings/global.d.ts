interface Window {
  $loadingBar?: import('naive-ui').LoadingBarProviderInst;
  $dialog?: import('naive-ui').DialogProviderInst;
  $message?: import('naive-ui').MessageProviderInst;
  $notification?: import('naive-ui').NotificationProviderInst;
}
interface PageResponse {
  total: number
  size: number
  current: number
  pages: number
  records: []
}

interface CreateImageResult{
  uuid: string
}

interface AuthState {
  token: string | ''
}

interface AiModelInfo{

  //from api
  modelName: string,
  enable: boolean,

  //for NSelector
  value: string,
  label: string,
  disabled: boolean
}
