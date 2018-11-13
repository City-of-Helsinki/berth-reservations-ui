const boatTypes = {
  dinghy: {
    fi: 'Jollavene'
  },
  rowing_boat: {
    fi: 'Soutuvene'
  },
  motorboat_outboard: {
    fi: 'Perämoottorivene'
  },
  motorboat_sterndrive: {
    fi: 'Sisäperämoottorivene'
  },
  motorboat_direct_drive: {
    fi: 'Keskimoottorivene'
  },
  sailboat: {
    fi: 'Purjevene / moottoripursi'
  },
  trawler: {
    fi: 'Troolari'
  },
  big_boat: {
    fi: 'Suuri alus (yli 20t)'
  }
};

const entries = Object.entries(boatTypes);

module.exports = {
  count: entries.length,
  next: null,
  previous: null,
  results: entries.map(([identifier, name]) => ({
    identifier,
    name
  }))
};
