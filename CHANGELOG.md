# 0.2.0

**MAJOR CHANGES**

```
UI improvements:

- Add winter storage application. User is now able to make winter storage applications or berth applications.

- Inside berth application, user can choose to create new application or extending existing application (with limits).

- Add better routing / app navigation.

- Better overview informations and navigation to edit.

- Better map tiles for Uusima region.

- Various style fixes and upgrade. Make venepaikka styling consist with the rest of City-of-Helsinki services.


Technical improvements:

- Replace REST-based API with GraphQL.

- Enhance typing with Typescript.

- Dockerize UI dev-environment.

- Remove styled-component, use vanilla SASS config from opencity.design and Bootstrap.

- Persisted form data as well as input data.

- Add Codecov config to show test coverages.

- Use upgradable Create-react-app. Reduce unnecesary dependencies.

```

**CHANGELOG**

- [#167](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/167) Dockerize development environment.

- [#168](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/168) Migration to Typescript.

- [#169](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/169) Remove styled-component, use vanilla SASS config from bootstrap SASS / opencity.design.

- [#170](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/170) Add Codecov.

- [#172](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/172) Migrate to GraphQL.

- [#176](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/176) Persist data with redux-persist.

- [#180](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/180) Add berth application switch: new application or exchange applicaiton.

- [#191](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/191) Winter Storage Areas.

- [#201](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/201) Use Helsinki map tiles.

* [#204](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/204) Add new front page.

* [#215](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/215) Add storage area selection filter.

# 0.1.0

**MAJOR CHANGES**

```
- Berth reservations UI initial release, version 0.1.0
```