# FFC SFI Siti agri mock

Mock service to support testing of Siti agri integration.

## Available endpoints

### `/check-eligibility` (POST)

Check user is eligible to apply.

Example response:

```
{
  sbi: 123456789,
  isEligible: true
}
```

### `/standards` (GET)

Return list of available standards.

Example response:

```
{
  sbi: 123456789,
  standards: [
    {
      id: 1,
      name: 'Standard name'
    }
  ]
}
```

### `/validate` (POST)

Validate parcel and standard combination.

Example response:

```
{
  sbi: 123456789,
  isValid: true
}
```

### `/calculate` (POST)

Calculate payment amount for parcel and standard combination.

Example response:

```
{
  sbi: 123456789,
  paymentAmount: 10000
}
```

### `/submit` (POST)

Submit agreement.

Example response:

```
{
  sbi: 123456789,
  submitted: true
}
```

## Licence

THIS INFORMATION IS LICENSED UNDER THE CONDITIONS OF THE OPEN GOVERNMENT LICENCE found at:

<http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3>

The following attribution statement MUST be cited in your products and applications when using this information.

> Contains public sector information licensed under the Open Government license v3

### About the licence

The Open Government Licence (OGL) was developed by the Controller of Her Majesty's Stationery Office (HMSO) to enable information providers in the public sector to license the use and re-use of their information under a common open licence.

It is designed to encourage use and re-use of information freely and flexibly, with only a few conditions.
