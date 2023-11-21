
export const getValueForm = (form) => {
  //создание formData - и сбор всех данных
  const formData = new FormData(form)

  //получаем все поля из  input-ов и проверяем на их значние
  const values = [...formData.values()]
  const isEmpty = values?.includes("")

  //внедряем все значение полей и отдаем data
  const data = Object.fromEntries(formData)

  //возвращем эти данные
  return {isEmpty,data,values}
}