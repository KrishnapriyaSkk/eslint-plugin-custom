# eslint-plugin-custom

This is an example repository purely for educational purposes. It acts as a basic custom eslint plugin and contans two basic rules and their implementations.

The rules implemented are:
- `no-var` : This rule forbids the use of `var` keyword to declare variables.
- `strict-quality` - This rule enforces usage of strict equality ( === ) over losse equality ( == ). The rule comes with an auto fix.

## Development instructions

### Setup

Run the following command to install all dependencies:

```bash
yarn install
```

### Running tests

To run all the tests within the tests directory, You can either run:

```bash
node src/tests
```

Or run:

```bash
yarn test
```
