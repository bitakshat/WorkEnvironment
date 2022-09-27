const mock = {
    uploadedFileName: 'Influencers List-Grid view.csv',
    fileUploaderName: 'Super Admin - Developer',
    errorMessage: '4 records out of 100 failed to import to the system, please re-upload or resolve duplicates',
    errorRecords: [
      {
        type: "duplicate",
        id: "45",
        records: [
          {
            source: "uploaded",
            no: 5,
            email: 'suyash4383@yopmail.com',
            firstName: 'Suyash',
            lastName: 'Gutierrez'
          },
          {
            source: "database",
            no: 19,
            email: 'suyash4383@yopmail.com',
            firstName: 'Suyash',
            lastName: 'Agarwal'
          },
        ]
      },
      {
        type: "duplicate",
        id: "30",
        records: [
          {
            source: "uploaded",
            no: 55,
            email: 'joe@twosapp.com',
            firstName: 'Joe',
            lastName: 'Steilberg'
          },
          {
            source: "database",
            no: 19,
            email: 'joe.steilbery@gmail.com',
            firstName: 'Joe',
            lastName: 'Steilberg'
          },
        ]
      },
      {
        type: "duplicate",
        id: "32",
        records: [
          {
            source: "uploaded",
            no: 9,
            email: 'santocannone@gmail.com',
            firstName: 'Santo',
            lastName: 'Cannone'
          },
          {
            source: "database",
            no: 21,
            email: 'santocannone@gmail.com',
            firstName: 'Santo',
            lastName: 'Maria'
          },
        ]
      },
      {
        type: "duplicate",
        id: "40",
        records: [
          {
            source: "uploaded",
            no: 11,
            email: 'lauren@gmail.com',
            firstName: 'Lauren',
            lastName: 'Bechard'
          },
          {
            source: "database",
            no: 18,
            email: 'lauren@bigseadesign.com',
            firstName: 'Lauren',
            lastName: 'Bechard'
          },
        ]
      }
    ]
  }
  
export default mock;