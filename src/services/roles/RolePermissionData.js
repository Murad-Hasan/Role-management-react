export default function getRolePermissionData() {
  return [
    {
      id: 1,
      name: "Admin",
      permissions: [
        {
          id: 5,
          name: "create_role",
        },
        {
          id: 6,
          name: "view role",
        },
        {
          id: 7,
          name: "edit role",
        },
        {
          id: 8,
          name: "delete role",
        },
      ],
    },
    {
      id: 2,
      name: "Super Admin",
      permissions: [
        {
          id: 1,
          name: "create_user",
          isChecked: true,
        },
        {
          id: 2,
          name: "view user",
          isChecked: true,
        },
        {
          id: 3,
          name: "edit user",
          isChecked: true,
        },
        {
          id: 4,
          name: "delete user",
          isChecked: true,
        },
      ],
    },
    {
      id: 3,
      name: "Moderator",
      permissions: [],
    },
  ];
}
