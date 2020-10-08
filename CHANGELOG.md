# [Unreleased]

<details>
  <summary>
    Changes that landed in develop and might be expected in the upcoming releases.
    Click to see more.
  </summary>
...
</details>

# 1.0.1 (October 08, 2020)

**Added:**

- Add winter storage contract PDF. in ([#316](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/316), [#318](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/318))
- Add loading spinners to Berth Page and Winter Storage Page contents. in ([#320](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/320))
- Use a predefined list of finnish municipalities. in ([#322](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/322))

**Fixed:**

- Improve email validation. in ([#317](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/317))
- Change the payment error page into more generic. in ([#321](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/321))
- Add harbor and winter storage areas images. in ([#319](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/319))

# 1.0.0 (September 15, 2020)

**Added:**

- Update graphql schema. in ([#308](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/308))
- Unmarked winter storage form. in ([#307](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/307))
- Update payment translations. in ([#310](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/310))
- Remove selection for unmarked WS from winter storage application form. in ([#309](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/309))
- Add trailer information to the unmarked WS application. in ([#311](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/311))
- Remove feature flag from unmarked winter storage. in ([#312](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/312))
- Add Swedish and English translations. in ([#758](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/758))

# 0.6.1 (August 27, 2020) Note: created for new prod env, not yet published

**Added:**

- Put unmarked winter storage behind feature flag. in ([#304](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/304))

**Fixed:**

- Revert WS query and behavior changes. in ([#303](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/303))
- Release fixes. in ([#305](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/305))

# 0.6.0 (August 26, 2020) Note: created for new prod env, not yet published

**Added:**

- Implement payment page layout. in ([#296](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/296))
- Add Nostojärjestys card to front page. in ([#298](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/298))
- Payment flow. in ([#299](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/299))
- Unmarked WS areas: implement choose area page. in ([#300](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/300))
- Create notice template and add payment and confirmation pages. in ([#283](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/283))
- Integrate project with gitlab infra. in ([#291](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/291))
- KuVa prod infra. in ([#301](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/301))

**Fixed:**

- Update layout to match design in Abstract. in ([#284](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/284))
- Kuva test env fixes. in ([#294](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/294))
- Fix piwik url. in ([#295](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/295))
- Fix problems with hyphens on Windows. in ([#297](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/297))

**Changed:**

- Upgrade outdated deps. in ([#277](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/277))
- Switch react-intl to react-i18next. in ([#290](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/290))

# 0.5.2 (July 29, 2020)

**Fixed:**

- Validate empty selections correctly. in ([#292](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/292))

**Changed:**

- Update contact information text on application confirmation page. in ([#292](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/292))

# 0.5.1 (July 10, 2020)

**Fixed:**

- Selected winter storage areas page: false notification of invalid selection. in ([#288](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/288))

# 0.5.0 (July 9, 2020)

**Added:**

- Not found page, aka 404. in ([#280](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/280))
- Footer: accessibility statement. in ([#278](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/278))

**Changed:**

- Finnish as a fallback language. in ([#282](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/282))
- Technical: folder structure. in ([#281](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/281))
- Accessibility improvements. in ([#273](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/273), [#274](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/274), [#275](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/275))
- Invalid URL: redirect to the front page. in ([#244](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/244))

**Fixed:**

- Winter storage application: replace harbor-related texts. in ([#285](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/285))
- Overview page: display company info. in ([#272](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/272))
- Berth application: skip unfilled fields when submitting the application. in ([#271](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/271))
- Winter storage application: replace the content that is inherited from berth application in "Selected" and "Overview" pages. in ([#245](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/245))
- Winter storage application: remove "Large vessel" additional information. in ([#244](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/244))
- Summary page: add missing fields. in ([#244](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/244))
- Boat dimensions fields: add validation to prevent large numbers and floating point numbers with more than two decimals. in ([#246](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/246))
- Technical: TS types for form values. in ([#245](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/245))
- Switch reason: send an empty string when 'No special request' is selected. in ([#248](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/248))

# 0.4.1 (April 29, 2020)

**Fixed:**

- Fix the overlapping icons' labels on the Winter Storage page in Firefox. in ([#268](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/268))
- Fix the icon's incorrect label on the Winter Storage page. in ([#267](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/267))
- Failure in submitting switch applications when the user selects "no preference" as a reason. in ([#266](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/266))
- Remove the accessibility checkbox. in ([#265](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/265))
- Update the year on the footer. in ([#264](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/264))

# 0.4.0 (February 26, 2020)

**Fixed:**

- Mutations for submitting applications to follow the latest API. in ([#262](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/262))

# 0.3.3 (January 16, 2020)

**Fixed:**

- The links on the berths page lead to the service map after the individual harbor pages were deleted. in ([#258](https://github.com/City-of-Helsinki/berth-reservations-ui/pull/258))

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
