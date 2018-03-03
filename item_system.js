// all items have
// ----------------
// bonus_when_used
// price_to_craft *
// crafting_lvl *
// lvl_to_use ---> skill specific
// stage_of_seed **
// can_be_equipped *
// health
// height
// width
// x
// y
// can_be_placed
// can be picked up
// holds_additional_items ---> arrows, 
// 


// an item has a name and an id to look it up
// an item is either stationed on the ground, dropped, or planted
// an item is either weildable or use_able
// an item can run out of health while using, or degrade over time
// an item holds the ingredients_list to craft it
// an item can be crafted after passing an inventory to item.craft, returns inventory without ingredients, with new item
// an item holds the lvl in order to craft it.
// an item holds the skill it goes to
// an item holds the bonus given while using or when used
// an item has a position and a size
//

	
items = 
{
	all : [],
	skill : skills.init(),
	item_count : 0,

	use : function()
	{
		console.log("testing");
	},


	test : function()
	{
		this.skill.show_all();
		this.create_archery_weapon("bow", 32, 32, this.use, 1, "archery", 1);

		this.all["bow"].use();
		console.log(this.all["bow"]);
	},
	create_archery_weapon : function(name, width, height, use_func, craft_lvl, skill_associated, bonus)
	{
		
		this.all[name] = this.init(name, 0, 0, 50, 50, 0, use_func, 1, skill_associated, 1, 5);
		this.all[name].can_be_wielded();
		this.all[name].can_be_equipped();
		this.all[name].can_be_shot();
	},

	create_weapon : function(name, width, height, craft_lvl, skill_associated, bonus)
	{
		this.all[name] = this.init(name, 0, 0, 50, 50, 0, use_func, 1, skill_associated, 1, 5);
		this.all[name].can_be_wielded();
	},

	create_armor : function(name, width, height, use_func, craft_lvl, skill_associated, bonus)
	{
		this.all[name] = this.init(name, 0, 0, 50, 50, 0, use_func, 1, skill_associated, 1, 5);
		this.all[name].can_be_equipped();

	},

	create_building_block : function(name, width, height, use_func, craft_lvl, skill_associated, bonus)
	{
		this.all[name] = this.init(name, 0, 0, 50, 50, 0, use_func, 1, skill_associated, 1, 5);
		this.all[name].can_be_placed(); 
		
	},

	create_farming_item : function(name, width, height, use_func, craft_lvl, skill_associated, bonus)
	{
		this.all[name] = this.init(name, 0, 0, 50, 50, 0, use_func, 1, skill_associated, 1, 5);
		this.can_be_planted();
		this.can_be_placed();
	},

	create_fishing_item : function(name, width, height, use_func, craft_lvl, skill_associated, bonus)
	{
		this.all[name] = this.init(name, 0, 0, 50, 50, 0, use_func, 1, skill_associated, 1, 5);

	},

	create_woodcutting_item : function(name, width, height, use_func, craft_lvl, skill_associated, bonus)
	{
		this.all[name] = this.init(name, 0, 0, 50, 50, 0, use_func, 1, skill_associated, 1, 5);
	},

	create_mining_item : function(name, width, height, use_func, craft_lvl, skill_associated, bonus)
	{
		this.all[name] = this.init(name, 0, 0, 50, 50, 0, use_func, 1, skill_associated, 1, 5);
	},

	create_food_item : function(name, width, height, use_func, craft_lvl, skill_associated, bonus)
	{
		this.all[name] = this.init(name, 0, 0, 50, 50, 0, use_func, 1, skill_associated, 1, 5);
		this.all[name].can_be_eaten();
		this.all[name].can_be_planted();

	},

	create_magic_item : function(name, width, height, use_func, craft_lvl, skill_associated, bonus)
	{

		this.all[name] = this.init(name, 0, 0, 50, 50, 0, function(){console.log("hi")}, 1, skill_associated, 1, 5);
		this.all[name].can_be_wielded();
		this.all[name].can_be_equipped();
	},

	create_non_craftables : function(name, width, height, use_func, craft_lvl, skill_associated, bonus)
	{
		this.all[name] = this.init(name, 0, 0, 50, 50, 0, function(){console.log("hi")}, 1, skill_associated, 1, 5);
		this.all[name].can_be_planted();

	},

	create_potion : function(name, width, height, use_func, craft_lvl, skill_associated, bonus)
	{
		this.all[name] = this.init(name, 0, 0, 50, 50, 0, function(){console.log("hi")}, 1, skill_associated, 1, 5);
		this.all[name].can_be_wielded();
		this.all[name].can_be_eaten();
	},



	init : function(name, x, y, width, height, id, use_func, craft_lvl, skill_to_use, skill_lvl_to_use, bonus)
	{
		item = new Object();
		item.pos = vector2d(x, y);
		item.width = width;
		item.height = height;
		item.name = name;
		item.health = 100;
		item.id = this.item_count;
		item.edible = false;
		item.placable = false;
		item.craft_cost = new Object();
		item.craft_cost.items = [];
		item.craft_cost.prices = [];
		item.placed = false;
		item.stackable = false;
		item.dropped = false;
		item.plantable = false
		item.planted = false;
		item.wieldable = false;
		item.shootable = false;
		item.equippable = false;
		item.skill = skill_to_use;
		item.skill_lvl = skill_lvl_to_use;
		item.use = use_func;
		item.craft_lvl = craft_lvl;
		item.bonus = bonus;

		item.show = function()
		{
			console.log(this.pos);
			console.log(this.width);
			console.log(this.height);
			console.log(this.name);
			console.log(this.health);
			console.log(this.id);
			console.log(this.placable);
			console.log(this.placed);
			console.log(this.dropped);
			console.log(this.plantable);
			console.log(this.planted);
			console.log(this.wieldable);
			console.log(this.skill);
			console.log(this.skill_lvl);
			this.use();
			console.log(this.craft_lvl);
			console.log(this.bonus);
			console.log(this.craft_cost.items);
		};

		item.set_coordinates = function(pos)
		{
			this.x = pos.x;
			this.y = pos.y;
		}

		item.copy = function()
		{
			copy = new Object();
			copy.pos = vector2d(this.x, this.y);
			copy.width = this.width;
			copy.height = this.height;
			copy.name = this.name;
			copy.health = this.health;
			copy.id = this.this.copy_count;
			copy.edible = this.edible;
			copy.placable = this.placeable;
			copy.craft_cost = new Object();
			copy.craft_cost.items = this.craft_cost.items;
			copy.craft_cost.prices = this.craft_cost.prices;
			copy.placed = this.placed;
			copy.stackable = this.stackable;
			copy.dropped = this.dropped;
			copy.plantable =this.plantable;
			copy.planted = this.planted;
			copy.wieldable = this.wieldable;
			copy.shootable = this.shootable;
			copy.equippable = this.equippable;
			copy.skill = this.skill;
			copy.skill_lvl = this.skill_lvl;
			copy.use = this.use;
			copy.craft_lvl = this.craft_lvl;
			copy.bonus = this.bonus;
			return (copy);
		};

		item.craft = function(invent)
		{
			//find ingredients
			//check if ingredients are in inventory
			//if all ingredients are there, make item, delete ingredients from inventory or subtract
			//if stackable, add item to inventory
			return (invent);
		};

		item.set_craft_cost = function(materials, prices)
		{
			item.craft_cost.items = materials;
			item.craft_cost.prices = prices;
		};

		item.can_be_eaten = function()
		{
			this.edible = true;
		};
		item.can_be_placed = function()
		{
			this.placable = true;
		};

		item.can_be_planted = function()
		{
			this.plantable = true;
		};

		item.can_be_wielded = function()
		{
			this.wieldable = true;
		};
		item.can_be_equipped = function()
		{
			this.equippable = true;
		};

		item.can_be_shot = function()
		{
			this.shootable = true;
		};

		this.item_count++;
		return (item);


	}


}


