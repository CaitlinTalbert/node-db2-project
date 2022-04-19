const router = require("express").Router();
const Car = require("./cars-model");
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  //   checkVinNumberUnique,
} = require("./cars-middleware");

router.get("/", (req, res) => {
  Car.getAll()
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      res.status(500).json({
        message: `Failed to retrieve cars: ${err.message}`,
      });
    });
});

// router.get("/:id", (req, res) => {
//   Car.getById(req.params.id)
//     .then((car) => {
//       if (car) {
//         res.json(car);
//       } else {
//         res.status(404).json({ message: "Failed to retrieve car with ID" });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({
//         message: `Failed to retrieve car: ${err.message}`,
//       });
//     });
// });

router.get("/:id", checkCarId, async (req, res) => {
  //   try {
  //     const car = await Car.getById(req.params.id);
  //     res.json(car);
  //   } catch (err) {
  //     next(err);
  //   }
  res.json(req.car);
});

router.post(
  "/",
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  (req, res) => {
    Car.create(req.body)
      .then((newCar) => {
        res.status(201).json(newCar);
      })
      .catch((err) => {
        res.status(500).json({
          message: `Failed to create car: ${err.message}`,
        });
      });
  }
);

module.exports = router;
