<script lang="ts">
  import { bignumber, pow, divide, multiply, format } from "mathjs";

  const SAND_RADIUS = bignumber(0.0005);
  const SOLAR_SYSTEM_RADIUS = bignumber(4.545e12);

  const BACTERIA_VOLUME = bignumber(1e-18);
  const OCEAN_VOLUME = bignumber(1.33800000009e18);

  const MILKY_WAY_VOLUME = bignumber(1.43953732986032e61);
  const EARTH_VOLUME = bignumber(1e21);

  const UNIVERSE_VOLUME = bignumber(4e80);

  const sandVolume = multiply(
    bignumber(multiply(divide(4, 3), Math.PI)),
    pow(SAND_RADIUS, 3)
  );
  const solarySystemVolume = multiply(
    bignumber(multiply(divide(4, 3), Math.PI)),
    pow(SOLAR_SYSTEM_RADIUS, 3)
  );

  const ratios = [
    [
      "ocean",
      "bacteria",
      format(divide(OCEAN_VOLUME, BACTERIA_VOLUME), { precision: 3 }),
    ],
    [
      "Earth",
      "bacteria",
      format(divide(EARTH_VOLUME, BACTERIA_VOLUME), { precision: 3 }),
    ],
    [
      "ocean",
      "sand",
      format(divide(OCEAN_VOLUME, sandVolume), { precision: 3 }),
    ],
    [
      "Earth",
      "sand",
      format(divide(EARTH_VOLUME, sandVolume), { precision: 3 }),
    ],
    [
      "Solar System",
      "Earth",
      format(divide(solarySystemVolume, EARTH_VOLUME), { precision: 3 }),
    ],
    [
      "Milky Way",
      "Earth",
      format(divide(MILKY_WAY_VOLUME, EARTH_VOLUME), { precision: 3 }),
    ],
    [
      "Universe",
      "Solar System",
      format(divide(UNIVERSE_VOLUME, solarySystemVolume), { precision: 3 }),
    ],
    [
      "Universe",
      "Milky Way",
      format(divide(UNIVERSE_VOLUME, MILKY_WAY_VOLUME), { precision: 3 }),
    ],
    [
      "Universe",
      "Earth",
      format(divide(UNIVERSE_VOLUME, EARTH_VOLUME), { precision: 3 }),
    ],
  ];
</script>

<main
  class="text-xl text-neutral-200 bg-neutral-700 h-screen w-screen flex flex-col justify-center"
>
  <div
    class=" flex flex-col justify-center items-start container mx-auto gap-5"
  >
    <h1 class="text-2xl text-neutral-200 font-semibold">Classic facts:</h1>
    {#each ratios as ratio}
      <p>
        The {ratio[0]} is
        <span class="inline-block text-primary-500">{ratio[2]}</span>
        bigger than the {ratio[1]}
      </p>
    {/each}
  </div>
</main>
