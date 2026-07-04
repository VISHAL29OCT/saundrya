import React, {
  useEffect,
  useState,
} from "react";

const SavedAddresses = () => {
  const [addresses, setAddresses] = useState([]);
  const [editingAddress, setEditingAddress] = useState(null);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/address`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "token"
          )}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setAddresses(data);
      });
  }, []);

  const setDefault = async (
    addressId
  ) => {
    await fetch(
      `${import.meta.env.VITE_API_URL}/address/default/${addressId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "token"
          )}`,
        },
      }
    );

    setAddresses(
      addresses.map(
        (address) => ({
          ...address,
          isDefault:
            address._id ===
            addressId,
        })
      )
    );
  };

  const deleteAddress = async (
    addressId
  ) => {
    await fetch(
      `${import.meta.env.VITE_API_URL}/address/${addressId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "token"
          )}`,
        },
      }
    );

    setAddresses(
      addresses.filter(
        (address) =>
          address._id !== addressId
      )
    );
  };

  const updateAddress =
    async (addressId) => {
      await fetch(
        `${import.meta.env.VITE_API_URL}/address/${addressId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
            Authorization: `Bearer ${localStorage.getItem(
              "token"
            )}`,
          },
          body: JSON.stringify(
            formData
          ),
        }
      );

      setAddresses(
        addresses.map(
          (address) =>
            address._id ===
              addressId
              ? {
                ...formData,
                _id:
                  addressId,
              }
              : address
        )
      );

      setEditingAddress(
        null
      );


    };


  const [formData,
    setFormData] =
    useState({
      name: "",
      phone: "",
      pincode: "",
      house: "",
      area: "",
      town: "",
      landmark: "",
      email: "",
    });

  return (
    <div className="p-6">
      <h2 className="text-3xl text-orange-300 font-semibold mb-6">
        Saved Addresses
      </h2>

      <div className="flex flex-col gap-4">
        {addresses.map(
          (address) => (
            <div
              key={address._id}
              className={`border p-4 rounded-xl
              ${address.isDefault
                  ? "border-green-500 bg-green-50"
                  : ""
                }`}
            >
              <h3 className="font-semibold">
                {address.name}
              </h3>

              <p>
                {
                  address.house
                }
                ,{" "}
                {
                  address.area
                }
              </p>

              <p>
                {
                  address.town
                }{" "}
                -
                {
                  address.pincode
                }
              </p>

              <p>
                {
                  address.phone
                }
              </p>

              <p>
                {
                  address.email
                }
              </p>

              {address.isDefault && (
                <p className="text-green-600 font-medium mt-2">
                  Default Address
                </p>
              )}

              {!address.isDefault && (
                <button
                  onClick={() =>
                    setDefault(
                      address._id
                    )
                  }
                  className="bg-black text-white text-sm px-3 py-1 rounded-lg mt-3 hover:text-orange-300 mx-2"
                >
                  Set As Default
                </button>


              )}

              <button
                onClick={() => {
                  setEditingAddress(
                    address._id
                  );

                  setFormData(address);
                }}
                className="bg-black text-white text-sm px-3 py-1 rounded-lg mt-3 hover:text-orange-300 mx-2"
              >
                Edit
              </button>

              {
                editingAddress ===
                address._id && (
                  <div className="mt-4">

                    <input
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      placeholder="Name"
                      className="border p-2 w-full"
                    />
                           <input
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      placeholder="Email"
                      className="border p-2 w-full"
                    />
                           <input
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      placeholder="Name"
                      className="border p-2 w-full"
                    />
                           <input
                      value={formData.pincode}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pincode: e.target.value,
                        })
                      }
                      placeholder="Pincode"
                      className="border p-2 w-full"
                    />
                           <input
                      value={formData.house}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          house: e.target.value,
                        })
                      }
                      placeholder="House Number"
                      className="border p-2 w-full"
                    />
                           <input
                      value={formData.area}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          area: e.target.value,
                        })
                      }
                      placeholder="Area"
                      className="border p-2 w-full"
                    />
                           <input
                      value={formData.town}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          town: e.target.value,
                        })
                      }
                      placeholder="Town"
                      className="border p-2 w-full"
                    />

                    <button
                      onClick={() =>
                        updateAddress(
                          address._id
                        )
                      }
                      className="bg-green-600 text-white px-2 py-1 mt-2 rounded"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() =>
                        setEditingAddress(
                          null
                        )
                      }
                      className="bg-red-500 text-white px-2 py-1 mt-2 rounded ml-2"
                    >
                      Cancel
                    </button>
                  </div>
                )
              }

              <button
                onClick={() =>
                  deleteAddress(address._id)
                }
                className="bg-black text-white text-sm px-3 py-1 rounded-lg mt-3 hover:text-orange-300 mx-2"
              >
                Delete
              </button>


            </div>
          )
        )}
      </div>

    </div>
  );
};

export default SavedAddresses;