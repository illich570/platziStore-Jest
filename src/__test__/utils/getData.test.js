import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  //Esto limpia los mocks del fetch antes de inicializarse
  test('Llamar una API y retornar datos', () => {
    //Esto realizara que la proxima llamada de fetch devuelve este valor
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getData('https://google.com')
      .then((response) => {
        expect(response.data).toEqual('12345');
        //Aqui validamos que sea correcto el valor
      });
    //Aqui validamos que se haya hecho el llamado correcto a la URL
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
