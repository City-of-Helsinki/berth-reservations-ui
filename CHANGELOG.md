# [Unreleased]

<details>
  <summary>
    Changes that landed in develop and might be expected in the upcoming releases.
    Click to see more.
  </summary>
  ...
</details>

# 0.3.2 (December 17, 2019)

**Fixed:**

- The wording of the text under exchange application. in ([#256](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/256))

# 0.3.1 (October 9, 2019)

**Added:**

- Notification for winter storage application. in ([#250](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/250) & [#252](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/252))

# 0.3.0 (July 24, 2019)

**Added:**

- Berth exchange application: Field for selecting the reason of requesting a new berth. in ([#229](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/229))

**Changed:**

- Selected page: Confirmation prompt before removing the selection. in ([#230](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/230))
- Application steps: Application type as a header. in ([#236](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/236))

**Fixed:**

- Selected page: translations for the selected berths/storage-areas. in ([#238](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/238))
- Winter Storage application: Trailer Registration Number is no longer required. in ([#239](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/239))
- HTML tag: lang attribute match the selected language. in ([#232](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/232))

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
