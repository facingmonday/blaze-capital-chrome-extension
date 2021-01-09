import { mergeOptions, formatFilterAndSortOptions } from '.';

describe('mergeFetchOptions', () => {
  it('Handles overwriting objects', () => {
    const option1 = {
      searchTerm: 'something',
    };
    const option2 = {
      searchTerm: 'else',
    };
    const mergedOptions = mergeOptions(option1, option2);
    expect(mergedOptions).toStrictEqual({
      searchTerm: 'else',
    });
  });
  it('Deep merges two sets of filter options', () => {
    const options1 = {
      filter: [
        {
          field: 'name',
          value: 'Jim',
          opperand: 'equals',
        },
      ],
    };
    const options2 = {
      filter: [
        {
          field: 'gender',
          value: 'male',
          opperand: 'equals',
        },
      ],
    };
    const mergedOptions = mergeOptions(options1, options2);
    expect(mergedOptions).toStrictEqual({
      filter: [
        {
          field: 'name',
          value: 'Jim',
          opperand: 'equals',
        },
        {
          field: 'gender',
          value: 'male',
          opperand: 'equals',
        },
      ],
    });
  });
  it('It should send an empty string', () => {
    const option1 = {
      supplierId: '',
    };
    const mergedOptions = formatFilterAndSortOptions(option1);
    expect(mergedOptions).toStrictEqual('?supplierId=""');
  });
});
